import app from './server.js'
import colors from 'colors';

const port = process.env.PORT || 5000;
app.listen(port, 
    () => console.log( colors.cyan.bold( `REST API en el puerto ${port}`))
)