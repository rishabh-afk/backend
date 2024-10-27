import { Router } from 'express';
import userRoutes from './userRoutes';

const router = Router();

/**
 * @description Main route for user-related operations
 * @route /user
 */
router.use('/user', userRoutes);

export default router;
