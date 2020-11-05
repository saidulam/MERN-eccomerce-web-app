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

  return (
    <>
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>   
      <main id="main" class="content custom-content">
      <h2>Delivery</h2>
      <p>Please give 1 days to create custom orders to perfection for you - then another 1 days to post out the delivery to you. In total we’d appreciate giving us a maximum of 2 days to receive your orders. Deliveries are also subject to availability.&nbsp;</p><p>Lashes &amp; other products available could be posted out for next day delivery - depending on time of order.</p><p>We ensure to get your parcel delivered safely to you as soon as we can.</p>
    </main>
     
          
      
    
    </>
  )
}


  


export default AndroidScreen