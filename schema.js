const SCHEMA_LIST = {
  user_login: `CREATE TABLE user_login (
    user_id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT,
    last_login TIMESTAMP,
    CONSTRAINT unique_username UNIQUE (username),
    CONSTRAINT unique_email UNIQUE (email)
  );`,
}

export default SCHEMA_LIST;