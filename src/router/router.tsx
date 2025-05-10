import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

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
    }
]);

export default router;
