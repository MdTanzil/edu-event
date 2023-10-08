
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import ServiceDetails from "../Components/ServiceDetails";
import Service from "../Components/Service";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/events",
        element: <>events</>,
      },
      {
        path: "/services",
        element: <Service></Service>,
      },
      {
        path: "/services/:id",    
        element: <PrivateRoute>
                  <ServiceDetails></ServiceDetails>
                </PrivateRoute>,
        
      },
      {
        path: "/blogs",
        element: <>blogs</>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
