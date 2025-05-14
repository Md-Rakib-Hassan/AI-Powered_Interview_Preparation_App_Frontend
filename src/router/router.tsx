import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Dashboard from "../pages/Home/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>,
      },
    ],
    },
    {
        path: "/login",
        element:<Login></Login>
    },
    {
        path: "/signup",
        element:<Signup></Signup>
  },
  {
    path: "/dashboard",
    element:<Dashboard></Dashboard>
    }
]);

export default router;
