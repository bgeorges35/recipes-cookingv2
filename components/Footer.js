import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-center p-1">
      <p className="flex justify-center items-center">
        Made with&nbsp;
        <AiFillHeart className="text-red-600" />
        &nbsp;by
        <span className="text-gray-500">&nbsp;Benoit Georges</span>
      </p>
    </div>
  );
};

export default Footer;
