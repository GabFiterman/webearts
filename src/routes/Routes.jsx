import Root from "../pages/Root";
import Project from "../pages/Project";
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
        }
      ])
    
      return (
        <RouterProvider router={router} />
      )
}