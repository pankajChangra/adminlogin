import Dashboard from "./Profile/views/Dashboard";
import UserProfile from "./Profile/views/UserProfile";
import { userDetailFail } from "./store/actions/user.act";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Users List",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin",
    userDetail: "userdeatil"
  },
];

export default dashboardRoutes;
