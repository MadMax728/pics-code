import { Register, Login } from "./components/web/user";
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
