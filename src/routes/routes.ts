import React, { lazy, LazyExoticComponent } from 'react';
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface IRoute {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>;
    name: string;
    exact?: boolean;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */"../01-lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */"../01-lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */"../01-lazyload/pages/LazyPage3"));



export const routes: IRoute[] = [
    {
        to: '/Lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy1',
    },
    {
        to: '/Lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy2',
    },
    {
        to: '/Lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy3',
    },
];
