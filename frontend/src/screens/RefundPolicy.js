import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import { listAndroids } from '../actions/productActions'

const AndroidScreen = ({ match }) => {
  const dispatch = useDispatch()
  const productAndroid = useSelector((state) => state.productAndroid)
  const { loading, error, products, } = productAndroid
   console.log(products)

  useEffect(() => {
    dispatch(listAndroids())
  }, [dispatch])

  return (
    <>
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>   
        
      <main id="main" class="content custom-content">
      <h1>Refund Policy</h1>
      <p>Unfortunately we don't provide refunds however we could generate an exchange within 5 days of receiving your order. However product needs to be in its original packaging &amp; not damaged in any shape or form.</p><p>Exchanges would either be for the same product or for another product with the same amount value.</p>

      </main>
  
          
      
    
    </>
  )
}


  


export default AndroidScreen