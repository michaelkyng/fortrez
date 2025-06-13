import type { Link } from "~/types/type";
export const routes: Link[] = [
  {
    state: "normal",
    name: "Home",
    path: "/",
  },
  {
    state: "normal",
    name: "Projects",
    path: "/projects",
  },
  {
    state: "subnavLink",
    name: "Other",
    subItems: [
      {
        name: "Support Us",
        path: "/support",
      },
      {
        name: "Blog",
        path: "/blog",
      },
    ],
  },
  {
    state: "button",
    name: "Donate",
    path: "/donate",
  },
];
