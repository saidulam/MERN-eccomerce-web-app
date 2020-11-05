/* eslint-disable no-console */
import React, { Component,useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {passwordReset} from '../actions/userActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'


const ForgotPassword = () => {
  const  [email,setEmail] = useState('')
  const  [showError,setShowError] = useState(false)
  const  [showNullError,setShowNullError] = useState(false)
  const  [messageFromServer,setMessageFromServer] = useState('')

  const dispatch = useDispatch()
  const Info = useSelector((state) => state.userPasswordReset)
  const { loading, error, response } = Info
  const successMessage ='Password Reset Email Successfully Sent!'
  const errorMessage = 'That email address is not recognized'
  const nullMessage = 'The email address cannot be null.'

  
  useEffect(() => {
    try {if (response) {
      setMessageFromServer('recovery email sent')
      setEmail('')
    }
  }catch (error) {
    if (!response) {
      setShowNullError(true)
    }
  }
}, [response])

 


  const sendEmail =async (e)=>{
      e.preventDefault();  
      if (email === '') {
        setShowNullError(true)
      } 
      dispatch(passwordReset(email))
      
   }

 

    
    
  return (
      <div>
      <FormContainer>
      <h1>RESET PASSWORD</h1>
      {error && <Message  variant = 'danger'>{errorMessage}</Message>}
      {loading && <Loader />}
      {showNullError && 
        <Message  variant = 'danger'>{nullMessage}</Message>}
      {showError && <Message  variant = 'danger'>{errorMessage}</Message>}
      {messageFromServer === 'recovery email sent' && 
        <Message  variant = 'success'>{successMessage}</Message>}
      <Form onSubmit={sendEmail}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Send Password Reset Email      
        </Button>
        </Form>
      </FormContainer>
    </div>

      
    );
  }


export default ForgotPassword;

