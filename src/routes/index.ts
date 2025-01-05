import { Router } from 'express';
import userRoutes from './userRoutes';
import activitiesRoutes from './activitiesRoutes';
import tournamentRoutes from './tournamentRoutes';

const router = Router();

router.use('/users', userRoutes);
router.use('/activities', activitiesRoutes)
router.use('/tournament', tournamentRoutes);

export default router;
