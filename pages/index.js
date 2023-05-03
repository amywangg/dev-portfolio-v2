import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Intro from "../components/Intro";
import getLatestRepos from "@lib/getStarredRepos";
import userData from "@constants/data";
import Skills from "@components/Skills";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Amy | Dev"
      description="My V2 Dev Portfolio Built from a Template"
    >
      <Intro />
      <Skills />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};
