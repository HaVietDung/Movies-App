import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import SpinMovies from "../components/commons/Spin";


const HomePage     = lazy(() => import('../pages/Home'));
const UpcomingPage = lazy(() => import('../pages/Upcoming'));
const SearchPage   = lazy(() => import('../pages/Search'));
const NotFoundPage = lazy(() => import('../pages/404'));
const DetailMovies = lazy(() => import('../pages/Detail'));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<SpinMovies/>}>
                <HomePage/>
            </Suspense>
        ),
        errorElement: <NotFoundPage/>
    },
    {
        path: "/upcoming",
        element: (
            <Suspense fallback={<SpinMovies/>}>
                <UpcomingPage/>
            </Suspense>
        ),
        errorElement: <NotFoundPage/>
    },
    {
        path: "/search",
        element: (
            <Suspense fallback={<SpinMovies/>}>
                <SearchPage/>
            </Suspense>
        ),
        errorElement: <NotFoundPage/>
    },
    {
        path:"/movie/:slug/:id",
        element:(
            <Suspense fallback={<SpinMovies/>}>
                <DetailMovies/>
            </Suspense>
        ),
        errorElement: <NotFoundPage/>
    }
]);
export default router;