import { Request, Response } from 'express';

export class BudgetController {
    static getAllBudgets = (_req: Request, res: Response) => {
        res.send('Get all budget items');
    }

    static getBudgetItem = (req: Request, res: Response) => {
        const id = req.params.id;
        res.send(`Get a single budget item with id ${id}`);
    }

    static createBudgetItem = (_req: Request, res: Response) => {
        res.send('Create a new budget item');
    }

    static updateBudgetItem = (_req: Request, res: Response) => {
        res.send('Update a budget item');
    }

    static deleteBudgetItem = (_req: Request, res: Response) => {
        res.send('Delete a budget item');
    }
}