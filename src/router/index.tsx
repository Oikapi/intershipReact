import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
import MoviePage from "../pages/MoviePage/MoviePage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: "/details/:id",
                element: <MoviePage />
            },
            {
                path: "/search",
                element: <MoviePage />
            }
        ]
    },
]);
