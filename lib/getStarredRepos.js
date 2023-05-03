import axios from "axios";

const getStarredRepos = async (data, token) => {
  try {
    const username = data.githubUsername;

    if (token) {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}&sort=stargazers_count&order=asc`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      let repos = res.data.items;
      let starredRepos = repos.splice(0, 6);
      return starredRepos;
    } else {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}&sort=stargazers_count&order=asc`
      );
      let repos = res.data.items;
      let starredRepos = repos.splice(0, 6);
      return starredRepos;
    }
  } catch (err) {
    console.log(err);
  }
};

export default getStarredRepos;
