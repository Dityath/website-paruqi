import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import loadable from "@loadable/component";

const Header = loadable(() => import("../components/header"));
const Main = loadable(() => import("../components/main"));

const Home: NextPage = () => {
  return (
    <div className="bg-paruqi flex justify-center">
      <div className="max-w-6xl w-full">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Home;
