import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center ">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-800">
              404 - Not Found
            </h2>
            <p className="text-xl text-gray-600 mt-2">
              Could not find the requested resource
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/">
              <button className="px-4 py-2 text-xl font-semibold bg-green-700 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out">
                Return Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
