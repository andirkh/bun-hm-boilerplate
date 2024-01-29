const serveHomePage = () => {
  console.log('serveHomePage')
  return new Response('/oki');
};

export default serveHomePage;