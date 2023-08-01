import Root from "../pages/Root";
import DevProject from "../pages/DevProject";
import DesignProjectSocialMedia from "../pages/DesignProjectSocialMedia";
import DesignProjectIlustracoes from "../pages/DesignProjectIlustracoes";
import DesignProjectEbooks from "../pages/DesignProjectEbooks";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/portfolio/dev-projects/:id",
      element: <DevProject />,
    },
    {
      path: "/portfolio/design-projects/social-media",
      element: <DesignProjectSocialMedia />,
    },
    {
      path: "/portfolio/design-projects/ebooks",
      element: <DesignProjectEbooks />,
    },
    {
      path: "/portfolio/design-projects/ilustracoes-e-manipulacoes",
      element: <DesignProjectIlustracoes />,
    },
  ]);

  return <RouterProvider router={router} />;
}
