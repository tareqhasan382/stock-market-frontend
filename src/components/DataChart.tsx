import axios from "axios";
import { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import "tailwindcss/tailwind.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

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

const DataChart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://django-backend-project.vercel.app/stock"
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching the data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const gainers = 3;
  const losers = 3;
  const unchanged = 3;
  // const gainers = products.filter(product => parseFloat(product.close) > parseFloat(product.open)).length;
  // const losers = products.filter(product => parseFloat(product.close) < parseFloat(product.open)).length;
  // const unchanged = products.filter(product => parseFloat(product.close) === parseFloat(product.open)).length;
  // const total = gainers + losers + unchanged;
  const pieData = {
    labels: ["Gainers", "Losers", "Unchanged"],
    datasets: [
      {
        data: [gainers, losers, unchanged],
        backgroundColor: ["#4CAF50", "#FF4081", "#03A9F4"],
      },
    ],
  };

  const barData = {
    labels: ["Gainers", "Losers", "Unchanged"],
    datasets: [
      {
        label: "Products",
        data: [gainers, losers, unchanged],
        backgroundColor: ["#4CAF50", "#FF4081", "#03A9F4"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  console.log(products);

  return (
    <div className=" w-full lg:h-44 h-auto bg-white shadow-lg p-1 ">
      <div className=" w-full h-full flex lg:flex-row flex-col items-center text-center  gap-2 ">
        <div>
          <div className=" flex gap-2 ">
            <div className=" flex flex-col ">
              <div className="text-green-600 font-bold text-2xl">{gainers}</div>
              <div className="text-green-600">Gainers</div>
            </div>
            <div className=" flex flex-col ">
              <div className="text-pink-600 font-bold text-2xl">{losers}</div>
              <div className="text-pink-600">Losers</div>
            </div>
            <div className=" flex flex-col ">
              <div className="text-blue-600 font-bold text-2xl">
                {unchanged}
              </div>
              <div className="text-blue-600">Unchanged</div>
            </div>
          </div>
          <div className=" h-32 ">
            <div className=" h-28 flex justify-around">
              <Bar data={barData} options={options} />
            </div>
          </div>
        </div>
        <div className=" size-44 flex justify-around mb-4">
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default DataChart;
