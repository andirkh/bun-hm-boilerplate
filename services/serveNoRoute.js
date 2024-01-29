import { getStaticFile } from "../utilities";

const serveNoRoute = () => {
  return new Response(getStaticFile('noroute.html'));
}

export default serveNoRoute;