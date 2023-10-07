
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
    { path: "/",
     element: <MainLayout></MainLayout>,
     children:[
        {
            path: "/",
            element: <>child</>
        }
    ]
    }
]);

export default router;
