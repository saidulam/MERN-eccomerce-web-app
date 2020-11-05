import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  getAndroid,
  getIos,
  getlaptops,
  getElectronics,
  getAccessories,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router.get('/categories/ios', getIos)
router.get('/categories/androids', getAndroid)
router.get('/categories/laptops', getlaptops)
router.get('/categories/electronics', getElectronics)
router.get('/categories/accessories', getAccessories)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export default router