import Root from "../pages/Root";
import Project from "../pages/Project";
import DevProject from '../pages/DevProject'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function Routes () {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root />
          // errorElement: <ErrorPage />
        },
        {
          path: "/portfolio/:id",
          element: <Project />
        },
        {
          path: "/portfolio/dev-projects/:id",
          element: <DevProject />
        }
      ])
    
      return (
        <RouterProvider router={router} />
      )
}