import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateStockMutation } from "../redux/stock/stockApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface FormData {
  trade_code: string;
  open: string;
  close: string;
  low: string;
  high: string;
  volume: number;
  date: string;
}

const AddData: React.FC = () => {
  const navigate = useNavigate();
  const [createStock, { isLoading }] = useCreateStockMutation();
  const schema = yup.object().shape({
    trade_code: yup.string().required(),
    open: yup.string().required(),
    close: yup.string().required(),
    low: yup.string().required(),
    high: yup.string().required(),
    volume: yup.number().required(),
    date: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await createStock(data);
    toast.success("Data added successfully");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="my-10 h-full items-center justify-center pb-10 rounded-lg shadow-lg flex flex-col bg-white text-black px-6 md:px-10 border border-gray-300">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="py-5 font-bold mb-4 text-center text-5xl">Add Data</h1>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-left w-full">Trade code</label>
            <input
              className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] outline-none focus:border-gray-600 text-black"
              type="text"
              id="trade_code"
              {...register("trade_code", { required: true })}
            />
            {errors.trade_code && (
              <span className="text-sm text-red-500 text-left w-full">
                {errors.trade_code.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-left w-full">Open</label>
            <input
              className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] outline-none focus:border-gray-600 text-black"
              type="text"
              id="open"
              {...register("open", { required: true })}
            />
            {errors.open && (
              <span className="text-sm text-red-500 text-left w-full">
                {errors.open.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-left w-full">Close</label>
            <input
              className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] outline-none focus:border-gray-600 text-black"
              type="text"
              id="close"
              {...register("close", { required: true })}
            />
            {errors.close && (
              <span className="text-sm text-red-500 text-left w-full">
                {errors.close.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-left w-full">Low</label>
            <input
              className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] outline-none focus:border-gray-600 text-black"
              type="text"
              id="low"
              {...register("low", { required: true })}
            />
            {errors.low && (
              <span className="text-sm text-red-500 text-left w-full">
                {errors.low.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-left w-full">High</label>
            <input
              className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] outline-none focus:border-gray-600 text-black"
              type="text"
              id="high"
              {...register("high", { required: true })}
            />
            {errors.high && (
              <span className="text-sm text-red-500 text-left w-full">
                {errors.high.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-left w-full">Volume</label>
            <input
              className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] outline-none focus:border-gray-600 text-black"
              type="number"
              id="volume"
              {...register("volume", { required: true })}
            />
            {errors.volume && (
              <span className="text-sm text-red-500 text-left w-full">
                {errors.volume.message}
              </span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-left w-full">Date</label>
            <input
              className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] outline-none focus:border-gray-600 text-black"
              type="date"
              id="date"
              {...register("date", { required: true })}
            />
            {errors.date && (
              <span className="text-sm text-red-500 text-left w-full">
                {errors.date.message}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col">
            <button
              disabled={isLoading}
              type="submit"
              className="text-xl font-bold p-2 rounded-lg bg-black hover:bg-gray-800 duration-700 text-white mt-2"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddData;
