const serveError = (error) => {
  return new Response(`<pre>${error}\n${error.stack}</pre>`, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}

export default serveError;