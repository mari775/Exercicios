import { Router } from 'express';
import {
  getAllUsers,
  createUser,
  getUserById,
  deleteUser
} from '../controllers/userController';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.delete('/:id', deleteUser);

export default router;
