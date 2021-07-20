import Image from "next/image";

const Grid = ({ img, name }) => {
  return (
    <div className="flex flex-col hover:opacity-70 duration-100 transform hover:scale-105 my-2">
      <div className="cursor-pointer text-center">
        <Image
          className="rounded-xl"
          src={img}
          width={300}
          height={300}
          objectFit="cover"
          quality={100}
        />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Grid;
