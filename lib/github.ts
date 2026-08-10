const GITHUB_USERNAME = "deva0813";

const CREATED_AT_QUERY = `
  query($username: String!) {
    user(login: $username) {
      createdAt
    }
  }
`;

const YEAR_QUERY = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
        }
        totalCommitContributions
        totalPullRequestContributions
        totalIssueContributions
        totalRepositoryContributions
      }
    }
  }
`;

async function graphql(token: string, query: string, variables: object) {
    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
    });

    if (!res.ok) throw new Error(`GitHub GraphQL error: ${res.status}`);
    const json = await res.json();
    if (json.errors) throw new Error(JSON.stringify(json.errors));
    return json.data;
}

export async function userData() {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    const empty = {
        totalContributions: 0,
        commits: 0,
        pullRequests: 0,
        issues: 0,
        repositoriesContributedTo: 0,
    };

    if (!token) return empty;

    try {
        const { user } = await graphql(token, CREATED_AT_QUERY, {
            username: GITHUB_USERNAME,
        });
        if (!user) throw new Error("User not found");

        const createdYear = new Date(user.createdAt).getFullYear();
        const currentYear = new Date().getFullYear();

        const windows: { from: string; to: string }[] = [];
        for (let year = createdYear; year <= currentYear; year++) {
            const from =
                year === createdYear ? user.createdAt : `${year}-01-01T00:00:00Z`;
            const to =
                year === currentYear
                    ? new Date().toISOString()
                    : `${year}-12-31T23:59:59Z`;
            windows.push({ from, to });
        }

        const results = await Promise.all(
            windows.map((w) =>
                graphql(token, YEAR_QUERY, {
                    username: GITHUB_USERNAME,
                    from: w.from,
                    to: w.to,
                })
            )
        );

        return results.reduce((acc, r) => {
            const c = r.user.contributionsCollection;
            acc.totalContributions += c.contributionCalendar.totalContributions;
            acc.commits += c.totalCommitContributions;
            acc.pullRequests += c.totalPullRequestContributions;
            acc.issues += c.totalIssueContributions;
            acc.repositoriesContributedTo += c.totalRepositoryContributions;
            return acc;
        }, empty) as {
            totalContributions: number,
            commits: number,
            pullRequests: number,
            issues: number,
            repositoriesContributedTo: number,
        };
    } catch (err) {
        return empty as {
            totalContributions: number,
            commits: number,
            pullRequests: number,
            issues: number,
            repositoriesContributedTo: number,
        };
    }
}