import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Dashboard from "../pages/Home/Dashboard";
import DashboardLayout from "../components/layout/DashboardLayout";
import InterviewPrep from "../pages/InterviewPrep/InterviewPrep";

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
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index:true,
        path:"",
        element:<Dashboard></Dashboard>
      },
      {
        path: "interview-prep/:sessionID",
        element:<InterviewPrep></InterviewPrep>
      }
    ]
    }
]);

export default router;
