import express from 'express';
import morgan from 'morgan';

import budgetRouter from './routes/budget.router.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/budget', budgetRouter);

export default app;
