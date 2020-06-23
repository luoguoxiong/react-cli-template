/*
 * @Descripttion:
 * @Author: peroLuo
 * @Date: 2020-06-22 16:06:42
 * @LastEditTime: 2020-06-23 16:45:44
 */

import AsyncComponent from "../components";

const Home = AsyncComponent(() => import("./home/index"));
const Good = AsyncComponent(() => import("./good"));
const routes = [
  {
    link: "/",
    component: Home,
  },
  {
    link: "/goods",
    component: Good,
  },
];
export default routes;
