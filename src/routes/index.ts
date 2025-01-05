import { Router } from 'express';
import userRoutes from './userRoutes';
import activitiesRoutes from './activitiesRoutes';

const router = Router();

router.use('/users', userRoutes);
router.use('/activities', activitiesRoutes)
export default router;
