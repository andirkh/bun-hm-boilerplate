import { getStaticFile } from "../utilities";

const serveUsersHtml = (pathname) => {
  return new Response(getStaticFile(`users/${pathname.replace('/', '')}.html`));
}

export default serveUsersHtml;