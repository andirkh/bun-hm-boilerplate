import { getStaticFile } from "../utilities";

const serveHomePage = () => {
  return new Response(getStaticFile('index.html'));
};

export default serveHomePage;