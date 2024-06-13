import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useStockQuery, useUpdateStockMutation } from "../redux/stock/stockApi";
import LoaderModal from "./LoaderModal";

interface FormData {
  trade_code: string;
  open: string;
  close: string;
  low: string;
  high: string;
  volume: number;
  date: string;
}

const schema = yup.object().shape({
  trade_code: yup.string().required("Trade code is required"),
  open: yup.string().required("Open price is required"),
  close: yup.string().required("Close price is required"),
  low: yup.string().required("Low price is required"),
  high: yup.string().required("High price is required"),
  volume: yup.number().required("Volume is required"),
  date: yup.string().required("Date is required"),
});

const UpdateStock = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    data: stock,
    isLoading: stockLoading,
    error: stockError,
  } = useStockQuery(id!);
  const [updateStock, { isLoading: updateLoading }] = useUpdateStockMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (stock) {
      reset({
        trade_code: stock.trade_code,
        open: stock.open,
        close: stock.close,
        low: stock.low,
        high: stock.high,
        volume: stock.volume,
        date: stock.date,
      });
    }
  }, [stock, reset]);

  const onSubmit = async (data: FormData) => {
    try {
      await updateStock({ id: id!, stock: data }).unwrap();
      toast.success("Data updated successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to update data");
    }
  };

  if (stockLoading) {
    return (
      <div>
        <LoaderModal />
      </div>
    );
  }

  if (stockError) {
    return <div>Error fetching stock data</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="my-10 h-full items-center justify-center pb-10 rounded-lg shadow-lg flex flex-col bg-white text-black px-6 md:px-10 border border-gray-300">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="py-5 font-bold mb-4 text-center text-5xl">
            Update Stock
          </h1>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-left w-full">Trade code</label>
            <input
              className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] outline-none focus:border-gray-600 text-black"
              type="text"
              id="trade_code"
              {...register("trade_code")}
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
              {...register("open")}
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
              {...register("close")}
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
              {...register("low")}
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
              {...register("high")}
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
              {...register("volume")}
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
              {...register("date")}
            />
            {errors.date && (
              <span className="text-sm text-red-500 text-left w-full">
                {errors.date.message}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col">
            <button
              disabled={updateLoading}
              type="submit"
              className="text-xl font-bold p-2 rounded-lg bg-black hover:bg-gray-800 duration-700 text-white mt-2"
            >
              {updateLoading ? "Loading..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStock;
