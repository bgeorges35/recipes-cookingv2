import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex mt-1 justify-evenly items-center">
      <Link href="/">
        <Image
          className="cursor-pointer"
          src="/logo.png"
          width={90}
          height={90}
        />
      </Link>
      <div className="border flex items-center bg-white rounded-xl p-1">
        <label>
          <AiOutlineSearch />
        </label>
        <input className="outline-none" placeholder="Search here..."></input>
      </div>
    </div>
  );
};

export default Header;
