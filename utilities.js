export const getStaticFile = (filename) => {
  return Bun.file(import.meta.dir + `/static/${filename}`);
}

export const getHeaders = (type) => {
  const contentType = { 
    'Content-Type': type === 'json' ? 'application/json' : 'text/html' 
  };
  return { 'headers': contentType }
}

export const formatRequest = async (request) => {
  const headers = JSON.parse(JSON.stringify(request.headers));
  const body = await request.json();
  return { headers, body };
};
