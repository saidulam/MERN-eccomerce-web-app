import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import {listElectronics} from '../actions/productActions'

const AndroidScreen = ({ match }) => {
  const dispatch = useDispatch()
  const productElectronics = useSelector((state) => state. productElectronics)
  const { loading, error, products, } = productElectronics
   console.log(products)

  useEffect(() => {
    dispatch(listElectronics())
  }, [dispatch])

  return (
    <>
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>
   
      <h1>LATEST ELECTRONICS PRODUCTS</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
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