import { lazy, Suspense } from "react";
import { createBrowserRouter, defer } from "react-router-dom";
import SpinMovies from "../components/commons/Spin";
import AuthLayoutMovies from "../components/Auth";
import PublicLayout from "../components/public";
import ProtectedLayout from "../components/ProtectedLayout";

const HomePage     = lazy(() => import('../pages/Home'));
const UpcomingPage = lazy(() => import('../pages/Upcoming'));
const SearchPage   = lazy(() => import('../pages/Search'));
const NotFoundPage = lazy(() => import('../pages/404'));
const DetailMovies = lazy(() => import('../pages/Detail'));
const LoginPage = lazy(() => import('../pages/Login'));
const FavoritePage = lazy(() => import('../pages/Favorite'));


//ham lay du lieu nguoi dung tu local storate
const getUserData = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            const user = window.localStorage.getItem("reactjs2302-movie");
            resolve(user)
        },3000    
        )
    })
}

const router = createBrowserRouter([
    {
        element: <AuthLayoutMovies/>,
        loader: () => defer ({userPromise: getUserData() }),
        errorElement: <NotFoundPage/>,
        children: [
            {
                element: <PublicLayout/>,
                errorElement: <NotFoundPage/>,
                children: [
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
                    },
                    {
                        path:"/login",
                        element:(
                            <Suspense fallback={<SpinMovies/>}>
                               <LoginPage/>
                            </Suspense>
                        ),
                        errorElement: <NotFoundPage/>
                    }
                ]

            },
            {
                element: <ProtectedLayout/>,
                errorElement: <NotFoundPage/>,
                children: [
                    {
                        path: "/favorite",
                        element: (
                            <Suspense fallback={SpinMovies}>
                                <FavoritePage/>
                            </Suspense>
                        ),
                        errorElement: <NotFoundPage/>
                        
                    }
                ]
            }
            
        ]
    },
    

]);
export default router;