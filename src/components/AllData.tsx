import axios from "axios";
import { Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

interface Product {
  id: string;
  trade_code: string;
  open: string;
  close: string;
  low: string;
  high: string;
  date: string;
  volume: number;
}
const AllData: React.FC = () => {
  const [products, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://django-backend-project.vercel.app/stock"
        );

        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching the data.");
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {};
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  //   console.log("products:", products);

  return (
    <div>
      <div className=" flex flex-col gap-5 py-5 ">
        <div className=" w-full ">
          <div className="w-full lg:h-14 h-24 bg-white flex lg:flex-row flex-col  justify-between">
            <div className=" w-full h-full flex items-center px-2 text-white overflow-x-auto overflow-y-hidden ">
              <table className="">
                <thead className=" text-blue-400 ">
                  <tr>
                    <td className="px-2 py-2 border text-left cursor-pointer ">
                      All
                    </td>
                    <td className="px-2 border text-left whitespace-nowrap cursor-pointer">
                      All Gainers
                    </td>
                    <td className="px-2 border text-left whitespace-nowrap cursor-pointer">
                      All Losers
                    </td>
                    <td className="px-2 border text-left cursor-pointer">
                      DSEX
                    </td>
                    <td className="px-2 border text-left cursor-pointer">
                      DS30
                    </td>
                    <td className="px-2 border text-left cursor-pointer">
                      Watchlist
                    </td>
                    <td className="px-2 border text-left cursor-pointer hover:text-white hover:bg-blue-400 ">
                      <FaCaretDown />
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="lg:w-1/3 w-full h-full flex items-center justify-center px-2">
              <input
                type="text"
                className="w-full h-10 px-2 border text-lg border-gray-500 focus:outline-none"
                placeholder="Search Instrument"
              />
              <span className="w-10 h-10 border border-gray-500 flex items-center justify-center">
                <Settings />
              </span>
            </div>
          </div>

          <div className=" relative overflow-x-auto">
            <table className="min-w-full table-auto border-collapse bg-white  ">
              <thead className="  bg-gray-300 text-black ">
                <tr>
                  <th className="px-4 py-2  text-left uppercase absolute ">
                    Trade Code
                  </th>
                  <th className="px-4 py-2  text-left uppercase">Open</th>
                  <th className="px-4 py-2  text-left uppercase">High</th>
                  <th className="px-4 py-2 text-left uppercase">Low</th>
                  <th className="px-4 py-2 text-left uppercase">Close</th>
                  <th className="px-4 py-2 text-left uppercase">Volume</th>
                  <th className="px-4 py-2 text-left uppercase absolute">
                    date
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <tr className="flex items-center justify-center h-full ">
                    <td className=" animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"></td>
                  </tr>
                )}
                {products?.length > 0 ? (
                  products?.map((item, index) => (
                    <tr key={index} className=" hover:bg-gray-300 ">
                      <td className="border px-4 py-2" data-label="Name">
                        {item?.trade_code}
                      </td>
                      <td className="border px-4 py-2" data-label="Name">
                        {item?.open}
                      </td>
                      <td className="border px-4 py-2" data-label="Name">
                        {item?.high}
                      </td>
                      <td className="border px-4 py-2" data-label="Name">
                        {item?.low}
                      </td>
                      <td className="border px-4 py-2" data-label="Name">
                        {item?.close}
                      </td>
                      <td className="border px-4 py-2" data-label="Name">
                        {item?.volume}
                      </td>
                      <td
                        className="border px-4 py-2 whitespace-nowrap "
                        data-label="Name"
                      >
                        {item?.date}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      //   colSpan="4"
                      className="text-center py-2 text-body-bold "
                    >
                      No Data found in products!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} /> */}
    </div>
  );
};

export default AllData;
