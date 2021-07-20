import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/facebookicon.svg" />
      </Head>
      <>
        <div className="flex flex-col-reverse text-center lg:text-left lg:flex-row items-center m-auto">
          <div className="flex flex-col mx-10">
            <h1 className="font-bold text-xl md:text-5xl lg:text-7xl">
              Let's Start Cooking With Popular Recipes
            </h1>
            <p className="text-xs lg:text-2xl my-1">
              Want to learn cook but confused how to start ?
            </p>
            <p className="text-xs lg:text-2xl my-1">No need to worry again</p>
            <div className="flex justify-center items-center text-white my-6 lg:text-2xl">
              <Link href="/toto">
                <a className="bg-green-400 rounded-3xl p-2 mx-4">Get Started</a>
              </Link>
              <Link href="/categories">
                <a className="bg-green-400 rounded-3xl p-2 mx-4">
                  Explore Menu
                </a>
              </Link>
            </div>
          </div>
          <div className="m-5">
            <Image src="/home.png" width={1100} height={1100} />
          </div>
        </div>
      </>
    </>
  );
}
