import express from 'express';
import { getAllUsers , updateProfile} from '../controllers/users.js';
import auth from '../middleware/auth.js';
import {login,signup} from '../controllers/auth.js'
const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)

export default router;