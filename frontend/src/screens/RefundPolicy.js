import React from 'react'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
const AndroidScreen = ({ match }) => {

  
  return (
    <>
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>   
      <Meta title = "Refund Policy"/>   
      <main id="main" class="content custom-content">
      <h1>Refund Policy</h1>
      <p>Unfortunately we don't provide refunds however we could generate an exchange within 5 days of receiving your order. However product needs to be in its original packaging &amp; not damaged in any shape or form.</p><p>Exchanges would either be for the same product or for another product with the same amount value.</p>

      </main>
  
          
      
    
    </>
  )
}


  


export default AndroidScreen