
import "./scss/app.scss";
import Portfolio from "./components/Portfolio";
import Root from "./routes/Root";
import ErrorPage from "./pages/ErrorPage";
import Project from "./components/Project";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    errorElement: <ErrorPage />
  },
  {
    path: "/portfolio/:id",
    element: <Project />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
