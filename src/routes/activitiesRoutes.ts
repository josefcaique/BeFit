import { Router } from 'express';
import { getAllActivities, createActivity } from '../controllers/activitiesController';


const router = Router();

router.get('/', getAllActivities);
router.post('/', createActivity)
export default router;
