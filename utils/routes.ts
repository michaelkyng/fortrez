import type { Link } from "~/types/type";
export const routes: Link[] = [
  {
    state: "normal",
    name: "Home",
    path: "/",
  },
  {
    state: "normal",
    name: "Support Us",
    path: "/support",
  },
  {
    state: "normal",
    name: "Blog",
    path: "/blog",
  },
  {
    state: "button",
    name: "Donate",
    path: "/donate",
  },
];
