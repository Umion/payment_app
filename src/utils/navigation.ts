import { NavLink } from "../types/navbarTypes";

export const navigation: NavLink[] = [
  {
    title: "All projects",
    children: [
      {
        href: "#link1",
        title: "Project 1",
      },
      {
        href: "#link2",
        title: "Project 2",
      },
    ],
  },
  {
    href: "#analytics",
    title: "Analytics",
  },
  {
    href: "#payments",
    title: "Payments",
  },
  {
    href: "#management",
    title: "Risk Management",
  },
  {
    href: "#products",
    title: "Products",
  },
  {
    href: "#features",
    title: "Payment features",
  },
  {
    href: "#customers",
    title: "Customers",
  },
  {
    href: "#finance",
    title: "Finance",
  },
  {
    href: "#developer",
    title: "Developer",
  },
];
