import { ArrowLeftRight, Database, DollarSign } from "lucide-react";

const HeaderData = () => {
  return (
    <div className=" w-full h-44 bg-white shadow-lg p-1 ">
      <div className=" w-full h-full flex flex-wrap items-center text-center justify-center gap-5 ">
        <div className=" flex items-center justify-center gap-2 ">
          <div className=" lg:size-8 size-6  rounded-full outline outline-gray-400 flex items-center justify-center ">
            <ArrowLeftRight size={20} className=" font-bold text-gray-400 " />
          </div>
          <span>
            <h1 className=" lg:text-xl text-base font-bold text-gray-400 ">
              Total Trade
            </h1>
            <h1 className=" lg:text-xl text-base font-bold ">1,00,107</h1>
          </span>
        </div>
        <div className=" flex items-center justify-center gap-2 ">
          <div className=" lg:size-8 size-6  rounded-full outline outline-gray-400 flex items-center justify-center ">
            <DollarSign size={20} className=" font-bold text-gray-400 " />
          </div>

          <span>
            <h1 className=" lg:text-xl text-base font-bold text-gray-400">
              Trade Value
            </h1>
            <h1 className=" lg:text-xl text-base font-bold ">3,507.699 mn</h1>
          </span>
        </div>
        <div className=" flex items-center justify-center gap-2 ">
          <div className=" lg:size-8 size-6  rounded-full outline outline-gray-400 flex items-center justify-center ">
            <Database size={20} className=" font-bold text-gray-400 " />
          </div>

          <span>
            <h1 className=" lg:text-xl text-base font-bold text-gray-400">
              Total Volume
            </h1>
            <h1 className=" lg:text-xl text-base font-bold ">9,83,85,974</h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderData;
