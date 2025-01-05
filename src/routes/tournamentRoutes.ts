import { Router } from 'express';
import {createTournament, getTournament} from '../controllers/tournamentController';

const router = Router();

router.get('/', getTournament);
router.post('/', createTournament);
export default router;