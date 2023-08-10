import { useRoutes, Navigate } from "react-router-dom";
import Loading from '../views/Loading'
import React from 'react';
import Home from '../views/Home'
export default function Element() {
    return useRoutes([
        {
            path: '/',
            element: <Navigate to='/Home' />
        },
        {
            path: '/',
            element: Home(),
            children: [
                {
                    path: '/Home',
                    element: LazyLoad('/Home/Main'),
                    key: 'Home'
                },
                {
                    path: '/Home/Nav',
                    element: LazyLoad('/Nav'),
                    key: 'Nav'
                },
                {
                    path: '*',
                    element: LazyLoad('/notFound'),
                    key: 'notFound'
                }
            ]
        },
        {
            path: '*',
            element: LazyLoad('/notFound'),
            key: 'notFound'
        }
    ])
}

// 路由懒加载
export const LazyLoad = (path) => {
    const Comp = React.lazy(() => import(`../views${path}`))
    return (
        <React.Suspense fallback={Loading()}>
            <Comp />
        </React.Suspense>
    )
}