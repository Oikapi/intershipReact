import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import MainPage from "../pages/MainPage/MainPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainPage />
            }
        ]
    },
]);
