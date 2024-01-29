import { getHeaders, getStaticFile } from "../utilities";

const serveHomePage = () => {
  return new Response(getStaticFile('index.html', getHeaders()));
};

export default serveHomePage;