import React from "react";
import Image from "next/image";
import Rating from "@material-ui/lab/Rating";

const RecipeModal = ({ open, data = null, modalHandler }) => {
  return open ? (
    <>
      <div className="justify-center items-center fixed inset-0 z-20 overflow-y-auto">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className=" border-0 rounded-lg shadow-lg relative flex flex-col px-2  bg-white m-5">
            <div className="flex items-start font-bold justify-between">
              <div></div>
              <h3 className="text-2xl px-5 pb-5 mt-3 text-center">
                {data.display.displayName}
              </h3>
              <button
                onClick={modalHandler}
                className="transition duration-500 ease-in-out transform hover:scale-150 text-red-600 hover:text-red-400"
              >
                <span className="text-2xl ">x</span>
              </button>
            </div>
            <div className="flex justify-center items-center p-4 flex-wrap">
              <div className="flex flex-col items-center">
                <Image
                  className="rounded-xl"
                  src={data.display.images[0]}
                  width={300}
                  height={300}
                  quality={100}
                />
                <Rating
                  className="m-2"
                  value={
                    data.content.reviews.averageRating
                      ? data.content.reviews.averageRating
                      : undefined
                  }
                  precision={0.1}
                  defaultValue={2.5}
                  readOnly
                />
              </div>
              <ul className="m-3 ">
                {data.content.preparationSteps?.map((c, i) => {
                  return (
                    <li className="m-3">
                      <span className="font-bold">{i + 1}. </span>
                      {c}
                    </li>
                  );
                }, [])}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-10 bg-black"></div>
    </>
  ) : null;
};

export default RecipeModal;
