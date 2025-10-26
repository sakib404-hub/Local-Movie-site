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
        element: <Suspense fallback={<div>Loading......</div>}>
          <Allmovies allMovies={allMovies}></Allmovies>
        </Suspense>
      },
      {
        path: '/marvelmovies',
        loader: () => fetch('../public/marvelMovies.json'),
        Component: MarvelMovies
      },
      {
        path: '/tamilmovies',
        loader: () => fetch('../public/tamilMovies.json'),
        Component: TamilMovies
      },
      {
        path: '/animatedmovies',
        loader: () => fetch('../public/animatedJsonData.json'),
        Component: AnimatedMovies
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>,
)
