import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const EmptyPage = lazy(() => import("pages/EmptyPage"));
const Requests = lazy(() => import("pages/Requests"));

const routes = [
  {
    path: "/",
    exact: true,
    component: EmptyPage
  },
  {
    path: "/customers",
    exact: true,
    component: EmptyPage
  },
  {
    path: "/associates",
    exact: true,
    component: EmptyPage
  },
  {
    path: "/requests",
    exact: true,
    component: Requests
  },
  {
    path: "/schedules",
    exact: true,
    component: EmptyPage
  },
  {
    path: "/payments",
    exact: true,
    component: EmptyPage
  },
  {
    path: "/settings",
    exact: true,
    component: EmptyPage
  },
  {
    path: "*",
    exact: true,
    component: () => <Redirect to="/requests" />
  }
];

export default routes;
