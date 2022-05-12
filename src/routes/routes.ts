import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface IRoute {
    path: string;
    to: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>;
    name: string;
    exact?: boolean;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */"../01-lazyload/layout/LazyLayout"));


export const routes: IRoute[] = [
    {
        path: '/dashboard/*',
        to: '/dashboard/',
        Component: LazyLayout,
        name: 'dashboard',
    },
    {
        path: 'no-lazy',
        to: '/no-lazy',
        Component: NoLazy,
        name: 'no-lazy',
    },
];
