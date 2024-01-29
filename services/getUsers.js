import { AppDatabase } from "../database";

const getUsers = () => {
  const db = new AppDatabase()

  try {
    const users = db.query(
      'SELECT * FROM  "user_login" ORDER BY "user_id" LIMIT 300 OFFSET 0'
    );
    return new Response(JSON.stringify(users));
  } catch (err) {
    return new Response(err);
  } finally {
    db.close();
  }
};

export default getUsers;