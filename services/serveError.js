import { getHeaders } from "../utilities";

const serveError = (error) => {
  return new Response(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Error</title>
    </head>
    <body>
        <h1>${error}\n${error.stack ? error.stack : ''}</h1>
    </body>
    </html>
  `, getHeaders())
}

export default serveError;