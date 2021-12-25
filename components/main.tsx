import type { NextPage } from "next";
import Image from "next/image";

const Main: NextPage = () => {
  return (
    <>
      <div className="relative ml-20 w-full h-screen">
        <Image src="/header-image_org.png" alt="" layout="fill" />
      </div>
    </>
  );
};

export default Main;
