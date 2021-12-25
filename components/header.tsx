import type { NextPage } from "next";
import Image from "next/image";

const Header: NextPage = () => {
  return (
    <>
      <header className="fixed mt-10">
        <div className="flex gap-7 items-center">
          <div className="relative block w-28">
            <Image
              src="/hello_.png"
              alt="Logo"
              layout="responsive"
              width={152}
              height={114}
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">LAMEON</h1>
            <p className="text-xs">
              Roses Are Red Violets Are Blue, Eat More Lame Art It&#39;s Good
              For You
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
