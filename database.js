import { Database } from "bun:sqlite";

import SCHEMA_LIST from "./schema";

const PATH_TO_DB = `${Bun.env.PATH_TO_DB}${Bun.env.DATABASE_NAME}`;

export const initializeDatabase = async () => {
  try {
    const dbFile = Bun.file(PATH_TO_DB);
    const isDbExists = await dbFile.exists();

    console.log(`${isDbExists ? 'connecting to' : 'creating a'} database ... `);

    const db = new Database(PATH_TO_DB);
    db.exec("PRAGMA journal_mode = WAL;");
    if (isDbExists) {
      console.log(`${Bun.env.DATABASE_NAME} is connected`)
    } else {
      const db = new Database(PATH_TO_DB);
      db.exec("PRAGMA journal_mode = WAL;");

      for (const key in SCHEMA_LIST) {
        const query = db.query(SCHEMA_LIST[key]);
        query.run();
        query.finalize();
      }

      console.log(`${Bun.env.DATABASE_NAME} database is succesfully created!`);
    }
  } catch (err) {
    console.error(`Cannot connected to DB due to ${err}`);
  }
}

export class AppDatabase {
  constructor() {
    this.db = new Database(PATH_TO_DB);
  }

  query(sqlQuery) {
    const queryData = this.db.query(sqlQuery);
    const values = queryData.all();
    queryData.finalize();

    return values;

  }

  run(sqlQuery) {
    const queryData = this.db.query(sqlQuery);
    queryData.run();
    queryData.finalize();

  }

  close() {
    this.db.close();

  }
}

export default initializeDatabase;