import { Router } from 'express';
import { BudgetController } from '../controller/BudgetController.js';

const router = Router();

router.get('/', BudgetController.getAllBudgets);
router.get('/:id', BudgetController.getBudgetItem);
router.post('/', BudgetController.createBudgetItem);
router.put('/:id', BudgetController.updateBudgetItem);
router.delete('/:id', BudgetController.deleteBudgetItem);

export default router;