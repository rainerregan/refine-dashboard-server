import express from 'express';

// Controllers
import { createUser, getAllUsers, getUserInfoByID } from '../controllers/user.controller.js';

// Router
const router = express.Router();

// Routes
router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUserInfoByID);

// Export the router
export default router;
