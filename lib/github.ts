import axios from "axios";

const GITHUB_USERNAME = "deva0813";

const CREATED_AT_QUERY = `
  query($username: String!) {
    user(login: $username) {
      createdAt
    }
  }
`;

async function graphql(token: string, query: string, variables: object) {
  const res = await axios.post(
    "https://api.github.com/graphql",
    { query, variables },
    {
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (res.status !== 200) throw new Error(`GitHub GraphQL error: ${res.status}`);
  const json = res.data;
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

function buildYearsQuery(windows: { from: string; to: string }[]) {
  const fields = windows
    .map(
      (_, i) => `
        y${i}: contributionsCollection(from: $from${i}, to: $to${i}) {
          contributionCalendar { totalContributions }
        }
      `
    )
    .join("\n");

  const params = windows
    .map((_, i) => `$from${i}: DateTime!, $to${i}: DateTime!`)
    .join(", ");

  return `
    query($username: String!, ${params}) {
      user(login: $username) {
        ${fields}
      }
    }
  `;
}

let cachedPromise: ReturnType<typeof fetchTotalContributions> | null = null;

async function fetchTotalContributions(): Promise<number> {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  if (!token) return 0;

  try {
    const { user } = await graphql(token, CREATED_AT_QUERY, {
      username: GITHUB_USERNAME,
    });
    if (!user) throw new Error("User not found");

    const createdYear = new Date(user.createdAt).getFullYear();
    const currentYear = new Date().getFullYear();

    const windows: { from: string; to: string }[] = [];
    for (let year = createdYear; year <= currentYear; year++) {
      const from = year === createdYear ? user.createdAt : `${year}-01-01T00:00:00Z`;
      const to =
        year === currentYear
          ? new Date().toISOString()
          : `${year}-12-31T23:59:59Z`;
      windows.push({ from, to });
    }

    const variables: Record<string, string> = { username: GITHUB_USERNAME };
    windows.forEach((w, i) => {
      variables[`from${i}`] = w.from;
      variables[`to${i}`] = w.to;
    });

    const query = buildYearsQuery(windows);
    const data = await graphql(token, query, variables);

    return windows.reduce((total, _, i) => {
      return total + data.user[`y${i}`].contributionCalendar.totalContributions;
    }, 0);
  } catch (err) {
    console.log(err);
    return 0;
  }
}

export function totalContributions() {
  if (!cachedPromise) {
    cachedPromise = fetchTotalContributions();
    cachedPromise.catch(() => {
      cachedPromise = null;
    });
  }
  return cachedPromise;
}