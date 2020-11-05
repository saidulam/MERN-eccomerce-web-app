/* eslint-disable no-console */
import React, { useRef,useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import {USER_PASSWORD_PAGE_RESET} from "../constants/userConstants"
import {userGetResetPageById,updateUserNewPassword, login} from '../actions/userActions'



const ForgotPassword = ({match,history}) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [wrongMessage, setWrongMessage] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)

    const dispatch = useDispatch()
    const idResponseDetails = useSelector((state) => state.userResetPasswordPage)
    const { loading, error, response, responseEmail } = idResponseDetails
    


    const updateResponse = useSelector((state) => state.userPasswordUpdate)
    const { success } = updateResponse 


  
   

    
    useEffect(() => {
      if (success) {
        setSuccessMessage(true)
        setPassword('')
        setConfirmPassword('')
        setTimeout(()=>{
          history.push('/login')
          },4000)   
      }
    dispatch(userGetResetPageById (match.params.id))
    }, [  history,success,dispatch, match,])

   
      
    const submitHandler = (e) => {
        e.preventDefault()
        const id = match.params.id
        console.log(id)
        if (password !== confirmPassword) {
          setWrongMessage(true)
          } else {
        dispatch(updateUserNewPassword(id,password))}          
      }  
   
  return (
      <div>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
      <FormContainer>
      <h1>UPDATE PASSWORD</h1>
        {wrongMessage && <Message variant='danger'>Passwords do not match</Message>}
        {successMessage && <Message variant='success'>Passwords updated!!</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
      <Form onSubmit={submitHandler} id = 'form'>     
        <Form.Group controlId='email'>
          <Form.Label>Enter New Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Comfirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='comfirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          UPDATE PASSWORD      
        </Button>
        </Form>
      </FormContainer>

      
    )} </div>);
  }


export default ForgotPassword;

