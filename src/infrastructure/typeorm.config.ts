import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "@entities/User";
import { DB_CONFIG } from "@helpers/databaseConfiguration";

export const AppDataSource = new DataSource({
  type: DB_CONFIG.type,
  host: DB_CONFIG.host,
  port: DB_CONFIG.port,
  username: DB_CONFIG.username,
  password: DB_CONFIG.password,
  database: DB_CONFIG.database,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
