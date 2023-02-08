import { lazy } from "react";

import HomeTemPlate from "containers/HomeTemPlate";
import AdminTemplate from "containers/AdminTemPlate/mainAdmin";

const routesAdmin = [
  {
    exact: true,
    path: "/admin",
    component: lazy(() => import("containers/AdminTemPlate/AuthPage")),
   },
  {
    exact: false,
    path: "/auth",
    component: lazy(() => import("containers/AdminTemPlate/AuthPage")),
  },
  {
    exact: false,
    path: '/add-user',
    component: lazy(() => import("containers/AdminTemPlate/AddUser"))
  },
  {
    exact: false,
    path: '/films',
    component: lazy(() => import("containers/AdminTemPlate/Films"))
  },
  {
    exact: false,
    path: "/add-films",
    component: lazy(() => import("containers/AdminTemPlate/AddFilmsPage")),
  },
  {
    exact: false,
    path: "/lich-chieu",
    component: lazy(() => import("containers/AdminTemPlate/LichChieu")),
  },
  {
    exact: false,
    path: "/edit-films",
    component: lazy(() => import("containers/AdminTemPlate/EditFilms")),
  },
  {
    exact: false,
    path: "/dash-board",
    component: lazy(() => import("containers/AdminTemPlate/DashboardPage")),
  },
  {
    exact: false,
    path: "/manage-user-admin",
    component: lazy(() => import("containers/AdminTemPlate/ManageUserAdmin")),
  },
];
const renderRouteAdmin = () => {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

//lazy load: khi người dùng lướt tới đâu thì mới trả api về tới vị trí đó, trách load hết một lần làm nặng trang web
const routesHome = [
  //home
  {
    exact: true,
    path: "/",
    component: lazy(() => import("containers/HomeTemPlate/HomePage")),
  },
  //booking
    {
      exact: false,
      path: "/booking/:id",
      component: lazy(() => import("containers/HomeTemPlate/BaiTapDatVe/DatVe")),
    },
  //listmovie
  {
    exact: false,
    path: "/list-movie",
    component: lazy(() => import("containers/HomeTemPlate/ListMoviePage")),
  },
  {
    exact: false,
    path: "/detail/:id",
    component: lazy(() => import("containers/HomeTemPlate/DetailMoviePage")),
  },
];

const renderRoutesHome = () => {
  return routesHome.map((route, index) => {
    return (
      <HomeTemPlate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

export { renderRoutesHome, renderRouteAdmin };
