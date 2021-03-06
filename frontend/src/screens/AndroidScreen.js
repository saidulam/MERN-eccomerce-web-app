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
   
      <h1>Latest Androids</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        <Meta title = "Android Phones"/>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          
        </>
      )}
    </>
  )
}


  


export default AndroidScreen