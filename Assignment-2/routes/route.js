import express, { Router } from 'express';

import checkauth from '../middleware/check-auth.js';

import { userRegister } from '../controller/Register-controller.js';
import { userLogin } from '../controller/login-controller.js';
const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);

export default router;
