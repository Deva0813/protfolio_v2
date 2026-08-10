import axios from "axios"

export const getContributionCount = async () => {
  const res = await axios.get("https://github-contributions-api.jogruber.de/v4/deva0813")
  const data = await res.data
  let count = 0

  if (data) {
    const { total } = data
    for (let i in total) {
      count += total[i]
    }
  }
  return count
} 