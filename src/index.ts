import app from './server.js'
import colors from 'colors';
import database from './config/database.js';

async function connectDB() {
    try {
        await database.authenticate();
        console.log(colors.blue.bold('Conexión exitosa a la base de datos'));
    } catch (error) {
        console.error(colors.red.bold('No se pudo conectar a la base de datos'));
        process.exit(1);
    }
}

await connectDB();

const port = process.env.PORT || 5000;
app.listen(port,
    () => console.log( colors.cyan.bold( `REST API en el puerto ${port}`))
)