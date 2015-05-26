module.exports = {
  "api/dogs/search": {
    name: "api/dogs/search",
    path: "/api/v0/dogs/search/?:text",
    params: {
      text: {
        kind: "rest",
        regex: "(.*)",
        default: "",
        name: "text"
      },
      tags: {
        kind: "query",
        regex: "(.*)",
        name: "tags"
      }
    }
  },
  "api/dogs/item": {
    name: "api/dogs/item",
    path: "/api/v0/dogs/item/?:id",
    params: {
      id: {
        kind: "rest",
        regex: "([\w-]{5,8})",
        default: "",
        name: "id"
      }
    }
  },
  "api/cats/search": {
    name: "api/cats/search",
    path: "/api/v0/cats/search/?:text",
    params: {
      text: {
        kind: "rest",
        regex: "(.*)",
        default: "",
        name: "text"
      },
      tags: {
        kind: "query",
        regex: "(.*)",
        name: "tags"
      }
    }
  },
  "api/cats/item": {
    name: "api/cats/item",
    path: "/api/v0/cats/item/?:id",
    params: {
      id: {
        kind: "rest",
        regex: "([\w-]{5,8})",
        default: "",
        name: "id"
      }
    }
  }
};