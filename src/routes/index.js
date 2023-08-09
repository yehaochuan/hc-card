import { useRoutes, Navigate } from "react-router-dom";
import React from 'react';
export default function Element() {
    return useRoutes([
        {
            path: '/',
            element: <Navigate to='/Home' />
        },
        {
            path: '/',
            element: LazyLoad('/Home'),
            children: [
                {
                    path: '/Home',
                    element: LazyLoad('/Home/Main'),
                    key: '1'
                },
                {
                    path: '/Home/Nav',
                    element: LazyLoad('/Nav'),
                    key: 'nav'
                },
            ]
        },
        {
            path: '*',
            element: LazyLoad('/notFound')
        }
    ])
}

// 路由懒加载
export const LazyLoad = (path) => {
    const Comp = React.lazy(() => import(`../views${path}`))
    return (
        <React.Suspense fallback={<> 加载中。。。</>}>
            <Comp />
        </React.Suspense>
    )
}