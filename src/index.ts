import 'reflect-metadata';
import app from './server.js'
import colors from 'colors';
import database from './config/database.js';
import { env } from './config/env.js';

async function connectDB() {
    try {
        await database.authenticate();
        if (env.nodeEnv === "development") {
            await database.sync({ alter: true });
        }
        console.log(colors.blue.bold('Conexión exitosa a la base de datos'));
    } catch (error) {
        console.error(colors.red.bold('No se pudo conectar a la base de datos'));
        process.exit(1);
    }
}

await connectDB();

app.listen(env.port,
    () => console.log(colors.cyan.bold(`REST API en el puerto ${env.port}`))
)