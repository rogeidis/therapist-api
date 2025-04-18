import { Router } from 'express';
import { getSession } from '../services/session';

const router = Router();

router.get('/',getSession)

export default router;
