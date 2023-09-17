import Root from '../pages/Root';
import DevProject from '../pages/DevProject/DevProject';
import DesignProjectSocialMedia from '../pages/DesignProject/DesignProjectSocialMedia';
import DesignProjectIlustracoes from '../pages/DesignProject/DesignProjectIlustracoes';
import DesignProjectEbooks from '../pages/DesignProject/DesignProjectEbooks';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
        },
        {
            path: '/portfolio/dev-projects/:id',
            element: <DevProject />,
        },
        {
            path: '/portfolio/design-projects/social-media',
            element: <DesignProjectSocialMedia />,
        },
        {
            path: '/portfolio/design-projects/ebooks',
            element: <DesignProjectEbooks />,
        },
        {
            path: '/portfolio/design-projects/ilustracoes-e-manipulacoes',
            element: <DesignProjectIlustracoes />,
        },
    ]);

    return <RouterProvider router={router} />;
}
