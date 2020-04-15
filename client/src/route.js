import Dashboard from "./Profile/views/Dashboard";
import UserProfile from "./Profile/views/UserProfile";

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
    layout: "/admin"
  },
];

export default dashboardRoutes;
