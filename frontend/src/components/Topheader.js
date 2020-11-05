import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import {register} from '../actions/userActions'


const AndroidScreen = ({ }) => {
  return (
    <>
          
<div id="hello" class="desktop-4 tablet-6 mobile-3">Free Shipping on US orders over $40 | 48hrs delivery within US and UK
</div>
    </>
  )
}





export default AndroidScreen