import { config } from "dotenv";

config({ path: "src/.env", debug: true });


const DB_TYPE:
  | "mysql"
  | "mariadb"
  | "postgres"
  | "mssql"
  | "oracle"
  | "sqlite" = "mysql";

export const DB_CONFIG = {
  type: DB_TYPE,
  host: process.env.DATABASE_HOST,
  port: 3306,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
};
