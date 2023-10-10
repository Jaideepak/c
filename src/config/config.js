import moment from "moment";

export const navbarBrand = "News Tracker";
export const header = (category) => `News - Top ${category} Headlines`;
export const noFound = "No Results Found";
export const searching = "Searching...";

export const navs = [
  { nav: "Home", page: "/" },
  { nav: "General", page: "/categories/general" },
  { nav: "Business", page: "/categories/business" },
  { nav: "Sports", page: "/categories/sports" },
  { nav: "Science", page: "/categories/science" },
  { nav: "Health", page: "/categories/health" },
  { nav: "Entertainment", page: "/categories/entertainment" },
  { nav: "Technology", page: "/categories/technology" }
];

export const router = [
  { path: "/", key: "general", category: "general", country: "russia" },
  {
    path: "/categories/general",
    key: "general",
    category: "general",
    country: "india"
  },
  {
    path: "/categories/business",
    key: "business",
    category: "business",
    country: "india"
  },
  {
    path: "/categories/sports",
    key: "sports",
    category: "sports",
    country: "india"
  },
  {
    path: "/categories/science",
    key: "science",
    category: "science",
    country: "india"
  },
  {
    path: "/categories/health",
    key: "health",
    category: "health",
    country: "india"
  },
  {
    path: "/categories/entertainment",
    key: "entertainment",
    category: "entertainment",
    country: "india"
  },
  {
    path: "/categories/technology",
    key: "technology",
    category: "technology",
    country: "india"
  }
];

export const summary = "Channel and PublishedAt";
export const newsChannel = (channel) => `Channel: ${channel}`;
export const lastUpdate = (published) =>
  `Published at: ${moment(published).format("ddd, DD MMM YYYY HH:mm:ss")}`;
