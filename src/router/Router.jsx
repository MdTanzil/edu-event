
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import ServiceDetails from "../Components/ServiceDetails";

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
        element: <>services</>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>
      },
      {
        path: "/blogs",
        element: <>blogs</>,
      },
    ],
  },
]);

export default router;
