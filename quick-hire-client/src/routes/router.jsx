import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home/Home';
import FindJobs from '../pages/FindJobs/FindJobs';
import BrowseCompanies from '../pages/BrowseCompanies/BrowseCompanies';

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('/jobs.json')
            },
            {
                path: 'find-jobs',
                Component: FindJobs
            },
            {
                path: 'browse-companies',
                Component: BrowseCompanies
            },
        ]
    }
])

export default router;