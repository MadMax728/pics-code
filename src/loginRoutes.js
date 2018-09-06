import Login from "./components/onBoarding/Login";
import Register from "./components/onBoarding/Register";
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
