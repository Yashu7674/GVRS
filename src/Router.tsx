import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Website from "./components/Website";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "website",
      element: <Website />,
    }
  ]);


  return <RouterProvider router={router} />;
};

export default Router;
