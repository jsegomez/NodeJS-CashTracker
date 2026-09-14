import { fileURLToPath } from "url";
import { dirname } from "path";
import { Sequelize } from "sequelize-typescript";
import { env } from "./env.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const isProduction = env.nodeEnv === "production";

const database = new Sequelize(
    {
        dialect: "postgres",
        host: env.database.host,
        port: env.database.port,
        username: env.database.username,
        password: env.database.password,
        database: env.database.name,
        models: [__dirname + "/../models"],
        logging: isProduction ? false : console.log,
        dialectOptions: isProduction
            ? { ssl: { require: true, rejectUnauthorized: false } }
            : {}
    }
);

export default database;