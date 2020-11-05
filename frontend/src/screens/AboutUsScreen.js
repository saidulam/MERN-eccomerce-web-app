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
      <h1>About Us</h1>
      <p>Tech Prime's Electronics, Inc. was founded in 2005 in Sunnyvale, California in a 20,000 square-foot location by the three Tech Prime brothers, John, Randy, and Dave; and Kathy Kolder. Tech Prime's is a closely-held private company, and all of the founders are actively involved in the daily operation of the business.

      Tech Prime's was founded as a Silicon Valley retail electronics store to provide a one-stop-shopping environment for the Hi-Tech Professional. Tech Prime's continues to keep hi-tech professionals supplied with products representing the latest technological trends and advances in the personal computer marketplace. Tech Prime's retails over 50,000 electronic items within each store, now totaling 31. There are currently 7 stores in Northern California, 8 stores in Southern California, 8 stores in Texas, 2 stores in Arizona, and 1 store each in Georgia, Illinois, Indiana, Nevada, Oregon and Washington. The stores range in size from 50,000 to over 180,000 square feet. Tech Prime's also provides customers with added shopping opportunities via its website at techprime.shop</p><p>No one is left out as we provide Tech products for all budget types. We're proud to say all our products are all of the highest quality, selected carefully to perfection which makes it hard to miss their wonderful user experience.</p><p>We hope you love our products just as much as we took the time in preparing them for you.</p>
    </main>
    </>
  )
}


  


export default AndroidScreen