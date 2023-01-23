
import { NavItemPops } from "components/common/Navbar/NavItem";

// NEEDS UPDATING BASED ON PAGES GENERATED

export const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  BLOG: "/blog",
  JOURNAL: "/journal",
  TECH: "/tech",
  RESOURCES: "/resources",
};

export const NAVBAR_ITEMS: NavItemPops[] = [
  {
    href: PATHS.HOME,
    label: "Home",
  },
  {
    href: PATHS.ABOUT,
    label: "About Me",
  },
  {
    href: PATHS.BLOG,
    label: "Blog",
  },
  {
    href: PATHS.JOURNAL,
    label: "Dev Journal",
  },
];
