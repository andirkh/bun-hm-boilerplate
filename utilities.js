export const getStaticFile = (filename) => {
  return Bun.file(import.meta.dir + `/static/${filename}`);
}

export const formatRequest = async (request) => {
  const headers = JSON.parse(JSON.stringify(request.headers));
  const body = await request.json();
  return { headers, body };
};

