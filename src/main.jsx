import { Component, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Allmovies from './Components/AllMovies/Allmovies.jsx';
import MarvelMovies from './Components/MarvelMovies/MarvelMovies.jsx';
import TamilMovies from './Components/TamilMovies/TamilMovies.jsx';
import AnimatedMovies from './Components/AnimatedMovies/AnimatedMovies.jsx';
import Loader from './Components/Loader/Loader.jsx';

const allMoviesPromise = async () => {
  const url = '../public/all.json'
  const res = await fetch(url)
  return res.json();
}
const allMovies = allMoviesPromise();

const router = createBrowserRouter([
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


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>,
)
