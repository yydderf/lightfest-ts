import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Game from "./routes/game";
import ErrorPage from "./error-page";
import App from "./App";
import Events from "./routes/events.tsx";
import Trailer from "./components/trailer/trailer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/game",
    element: <Game />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/events",
    element: <Events/>,
    errorElement: <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)