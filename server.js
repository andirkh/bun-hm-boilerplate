import initializeDatabase from "./database";

//ReSTful:
import getUsers from "./services/getUsers";
import postNewUser from "./services/postNewUser";
import serveBlogPage from "./services/serveBlogPage";
import serveError from "./services/serveError";
import serveHomePage from "./services/serveHomePage";
import serveNoRoute from "./services/serveNoRoute";
import serveUsersHtml from "./services/serveUsersHtml";

initializeDatabase();

Bun.serve({
  port: Bun.env.PORT || 6969,
  async fetch(req) {
    const { pathname } = new URL(req.url);
    switch (req.method) {
      case 'GET':
        if (pathname === "/") return serveHomePage();
        if (pathname === "/blog") return serveBlogPage();
        if (pathname === "/users") return getUsers();
        else return serveUsersHtml(pathname);
      case 'POST':
        if (pathname === '/new/user') return postNewUser(req);
        break;
      case 'PUT':
      case 'DELETE':
      default:
        return serveNoRoute();
    }
  },
  error(error) {
    return serveError(error)
  }
})

console.log(`Serving ... ${Bun.env.PORT}`);
