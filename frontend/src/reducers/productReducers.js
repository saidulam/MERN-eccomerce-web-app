import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_ANDROID_REQUEST,
  PRODUCT_ANDROID_SUCCESS,
  PRODUCT_ANDROID_FAIL,
  PRODUCT_IOS_REQUEST,
  PRODUCT_IOS_SUCCESS,
  PRODUCT_IOS_FAIL,
  PRODUCT_LAPTOPS_FAIL,
  PRODUCT_LAPTOPS_SUCCESS,
  PRODUCT_LAPTOPS_REQUEST,
  PRODUCT_ACCESSORIES_REQUEST,
  PRODUCT_ACCESSORIES_SUCCESS,
  PRODUCT_ACCESSORIES_FAIL,
  PRODUCT_ELECTRONICS_REQUEST,
  PRODUCT_ELECTRONICS_SUCCESS,
  PRODUCT_ELECTRONICS_FAIL,
} from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,}

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}                                                               


export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true }
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true }
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true }
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true }
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_UPDATE_RESET:
      return { product: {} }
    default:
      return state
  }
}

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true }
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true }
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_CREATE_REVIEW_RESET:
      return {}
    default:
      return state
  }
}

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productAndroidReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_ANDROID_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_ANDROID_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_ANDROID_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productIosReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_IOS_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_IOS_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_IOS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productLaptopReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LAPTOPS_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LAPTOPS_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_LAPTOPS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productAccessoriesReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_ACCESSORIES_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_ACCESSORIES_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_ACCESSORIES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productElectronicsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_ELECTRONICS_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_ELECTRONICS_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_ELECTRONICS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}