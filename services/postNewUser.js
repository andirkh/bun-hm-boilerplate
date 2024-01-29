import { formatRequest } from "../utilities";
import { AppDatabase } from "../database";

const postNewUser = async (req) => {
  const { body: { username, password, email } = {} } = await formatRequest(req);

  const db = new AppDatabase();
  try {
    db.run(`INSERT INTO user_login (username, password, email) 
    VALUES ('${username}', '${password}', '${email}')`
    )

    return new Response('user created', { status: 200 });
  } catch (error) {
    return new Response(error, {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  } finally {
    db.close();
  }
}

export default postNewUser;