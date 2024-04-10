import express from 'express';
import studentRouter from './student';
import authRouter from './auth';

const router = express.Router();

router.use('/students', studentRouter)
router.use('/auth', authRouter)

export default router;