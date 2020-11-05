import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  resetPassword,
  getUserByToken,
  updateUserPassword,
  contactPost
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router.route('/reset').post(resetPassword)
router.route('/reset/:id').get(getUserByToken)
router.route('/updated').put(updateUserPassword)
router.route('/contact').post(contactPost)


router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
  router.route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect,admin,getUserById)
  .put(protect,admin,updateUser)

export default router