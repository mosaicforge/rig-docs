import meta from "../../../pages/_meta.tsx";
import guides_meta from "../../../pages/guides/_meta.tsx";
export const pageMap = [{
  data: meta
}, {
  name: "about",
  route: "/about",
  frontMatter: {
    "sidebarTitle": "About"
  }
}, {
  name: "docs",
  route: "/docs",
  children: [{
    name: "Architecture",
    route: "/docs/Architecture",
    frontMatter: {
      "sidebarTitle": "Architecture"
    }
  }, {
    name: "quickstart",
    route: "/docs/quickstart",
    frontMatter: {
      "sidebarTitle": "Quickstart"
    }
  }]
}, {
  name: "guides",
  route: "/guides",
  children: [{
    data: guides_meta
  }, {
    name: "discord_bot",
    route: "/guides/discord_bot",
    frontMatter: {
      "sidebarTitle": "Discord Bot"
    }
  }, {
    name: "index",
    route: "/guides",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "travel_agent",
    route: "/guides/travel_agent",
    frontMatter: {
      "sidebarTitle": "Travel Agent"
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}];