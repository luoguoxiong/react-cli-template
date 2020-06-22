import AsyncComponent from "../components";

const Home = AsyncComponent(() => import("./home"));
const Good = AsyncComponent(() => import("./good"));
const routes = [
  {
    name: "首页",
    isTab: true,
    link: "/",
    component: Home,
  },
  {
    name: "首react",
    isTab: true,
    link: "/goods",
    component: Good,
  },
];
export default routes;
