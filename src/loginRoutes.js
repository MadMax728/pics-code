import Login from "./components/web/User";
import Register from "./components/web/User";
import * as routes from "./lib/constants/routes";

export const LoginRoutes = [
  {
    path: routes.ROOT_ROUTE,
    component: Login
  },
  {
    path: "/register",
    component: Register
  }
];
