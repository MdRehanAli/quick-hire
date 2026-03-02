import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home/Home';
import FindJobs from '../pages/FindJobs/FindJobs';
import BrowseCompanies from '../pages/BrowseCompanies/BrowseCompanies';
import Loading from '../component/Loading/Loading';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('/jobs.json')
            },
            {
                path: 'find-jobs',
                Component: FindJobs,
                loader: () => fetch('/jobs.json')
            },
            {
                path: 'browse-companies',
                Component: BrowseCompanies
            },
        ]
    }
])

export default router;