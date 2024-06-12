import { Circle } from "lucide-react";

const Header1 = () => {
  return (
    <div className=" w-full h-44 bg-white shadow-lg p-1 ">
      <div className=" h-full flex flex-col items-center text-center justify-center gap-2 ">
        <h1 className=" lg:text-4xl text-3xl font-medium text-gray-400">
          LATEST SHARE PRICE
        </h1>
        <div className="  flex  gap-5 ">
          <span className=" flex items-center justify-center ">
            <Circle
              color="bg-red-500"
              className=" bg-red-500 rounded-full mr-1 "
              size={20}
            />
            <p className="text-red-500">Closed</p>
          </span>
          <p>Updated: 2:30 pm 12/6</p>
        </div>
      </div>
    </div>
  );
};

export default Header1;
