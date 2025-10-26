import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Allmovies from "../Components/AllMovies/Allmovies";
import { Suspense } from "react";
import MarvelMovies from "../Components/MarvelMovies/MarvelMovies";
import TamilMovies from "../Components/TamilMovies/TamilMovies";
import AnimatedMovies from "../Components/AnimatedMovies/AnimatedMovies";
import Loader from "../Components/Loader/Loader";

const allMoviesPromise = async () => {
    const url = '../public/all.json'
    const res = await fetch(url)
    return res.json();
}
const allMovies = allMoviesPromise();

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/allmovies',
                element: <Suspense fallback={<Loader></Loader>}>
                    <Allmovies allMovies={allMovies}></Allmovies>
                </Suspense>
            },
            {
                path: '/marvelmovies',
                loader: () => fetch('../public/marvelMovies.json'),
                element: <Suspense fallback={<Loader></Loader>}>
                    <MarvelMovies></MarvelMovies>
                </Suspense>
            },
            {
                path: '/tamilmovies',
                loader: () => fetch('../public/tamilMovies.json'),
                element: <Suspense fallback={<Loader></Loader>
                }>
                    <TamilMovies></TamilMovies>
                </Suspense>
            },
            {
                path: '/animatedmovies',
                loader: () => fetch('../public/animatedJsonData.json'),
                element: <Suspense fallback={<Loader></Loader>
                }>
                    <AnimatedMovies></AnimatedMovies>
                </Suspense>
            }
        ]
    }
])