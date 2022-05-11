import { Router } from 'express';
import MafiaRouter from './mafiagame';
const router = Router();

// router.use('/mafia', MafiaRouter);

router.get('/ping', (_req, res) => {
    res.status(200).json({ value: 'pong' });
})


export default router;