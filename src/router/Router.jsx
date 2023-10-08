
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import ServiceDetails from "../Components/ServiceDetails";
import Service from "../Components/Service";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/Blogs";
import Events from "../Pages/Events";
import Page404 from "../Pages/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/events",
        element: (
          <PrivateRoute>
            <Events></Events>
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <Service></Service>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>,
          </PrivateRoute>
        ),
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
