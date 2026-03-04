import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home/Home';
import FindJobs from '../pages/FindJobs/FindJobs';
import BrowseCompanies from '../pages/BrowseCompanies/BrowseCompanies';
import Loading from '../component/Loading/Loading';
import JobDetails from '../pages/JobDetails/JobDetails';
import Login from '../pages/Login/Login';

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
                path: 'job-details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
                Component: JobDetails,
            },
            {
                path: 'browse-companies',
                Component: BrowseCompanies
            },
            {
                path: 'login',
                Component: Login
            },
        ]
    }
])

export default router;