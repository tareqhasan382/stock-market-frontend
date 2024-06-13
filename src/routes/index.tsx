import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import NotFound from "../components/NotFound";
import AddData from "../components/AddData";
import UpdateStock from "../components/UpdateStock";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "/add",
        element: <AddData />,
      },
      {
        path: "/updateStock/:id",
        element: <UpdateStock />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default routes;
