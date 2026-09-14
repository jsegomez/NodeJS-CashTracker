import { fileURLToPath } from "url";
import { dirname } from "path";
import { Sequelize } from "sequelize-typescript";

const __dirname = dirname(fileURLToPath(import.meta.url));

const requiredEnvVars = ["DB_HOST", "DB_PORT", "DB_USER", "DB_PASSWORD", "DB_NAME"] as const;
for (const key of requiredEnvVars) {
    if (!process.env[key]) {
        throw new Error(`Falta la variable de entorno ${key}`);
    }
}

const isProduction = process.env.NODE_ENV === "production";

const database = new Sequelize(
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        models: [__dirname + "/../models"],
        logging: isProduction ? false : console.log,
        dialectOptions: isProduction
            ? { ssl: { require: true, rejectUnauthorized: false } }
            : {}
    }
);

export default database;