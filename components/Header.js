import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    </div>
  );
};

export default Header;
