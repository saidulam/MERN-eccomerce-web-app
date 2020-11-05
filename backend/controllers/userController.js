import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import nodemailer from 'nodemailer'
import crypto from 'crypto';
import User from '../models/UserModel.js'



//@desc  Auth user and get token
//@routes  POST /api/users/login
//@acces  public
const authUser = asyncHandler(async (req,res) =>{
    const {email,password} = req.body
    const user =await User.findOne({email})
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id :user._id,
            name:user.name,
            email:user.email,
            isAdmin : user.isAdmin,
            token : generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error ('invalid email or password')
    }
})

//@desc  Registerm a new user
//@routes  POST /api/users
//@acces  public
const registerUser = asyncHandler(async (req,res) =>{
    const {name,email,password} = req.body
    const userExist =await User.findOne({email})
   
    if(userExist){
        res.status(400)
        throw new Error ('User already exist')
    }

    const user = await User.create({
        name,
        email,
        password
    })
    if (user) {
        res.status(201).json({
            _id :user._id,
            name:user.name,
            email:user.email,
            isAdmin : user.isAdmin,
            token : generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})



//@desc  GET userProfile
//@routes GET /api/users/profile
//@acces  private
const getUserProfile = asyncHandler(async (req, res) => {
    const user =await User.findById(req.user._id)

    if(user){
        res.json({
            _id :user._id,
            name:user.name,
            email:user.email,
            isAdmin : user.isAdmin,
            
        })
    }else{
        res.status(404)
        throw new Error('User not found')
    }
}
)

//@desc  Update userProfile
//@routes GET /api/users/profile
//@acces  private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user =await User.findById(req.user._id)

    if(user){
       user.name = req.body.name || user.name
       user.email = req.body.email || user.email
       if(req.body.password){
           user.password = req.body.password
       }

       const updatedUser =  await user.save()
       res.json({
        _id :updatedUser._id,
        name:updatedUser.name,
        email:updatedUser.email,
        isAdmin : updatedUser.isAdmin,
        token : generateToken(updatedUser._id),

    })
    }else{
        res.status(404)
        throw new Error('User not found')
    }
}
)

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
  })
  


  
// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
  
    if (user) {
      await user.remove()
      res.json({ message: 'User removed' })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
  
 // @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')
  
    if (user) {
      res.json(user)
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
  
  // @desc    Update user
  // @route   PUT /api/users/:id
  // @access  Private/Admin
  const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
  
    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      user.isAdmin = req.body.isAdmin 
  
      const updatedUser = await user.save()
  
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
  

//@desc  reset user and get token
//@routes  POST /api/users/reset
//@acces  public
const resetPassword = asyncHandler(async (req,res) =>{
  const {email} = req.body
  let user =await User.findOne({email})
    
  if (email === '') {
    res.status(400).send('email required');
  }
  console.error(email);
  if (user === null) {
    console.error('email not in database');
    res.status(403).send('email not in db');
  }else{
    const token = user._id
    console.log(token)
    user.update({
      Token: token,
    });

    let transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
          user: "info@americanfarminvestr.com", // generated ethereal user
          pass: "Derryukere1256"  // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });

    let mailOptions = {
      from: '"Tech Prime" <info@americanfarminvestr.com>', // sender address
      to: `${email}`, // list of receivers
      subject: 'Password reset link', // Subject line
      text:
            'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
            + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
            + `https://www.techprime.shop/updatePassword/${token}\n\n`
            + 'If you did not request this, please ignore this email and your password will remain unchanged.\n', // plain text body
      
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('there was an error: ', error);
      } else {
        console.log('Message sent: %s', info.messageId); 
        res.status(200).json('recovery email sent');
      } 
      
    });



  }

})

 // @desc    Update user
  // @route   PUT /api/users/:id
  // @access  Private/Admin
  const getUserByToken = asyncHandler(async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id)  
    if (user == null) {
      console.error('password reset link is invalid or has expired');
      res.status(403).json('password reset link is invalid or has expired');
    } else {
      res.json({
        "email":user.email,
        "message" : "password updated !!"
      })
    }
  })
   // @desc    Update user
  // @route   PUT /api/users/:id
  // @access  Private/Admin
  const updateUserPassword = asyncHandler(async (req, res) => {
    const {id} = req.body
    const user = await User.findById(id) 
    if (user) {
      user.password = req.body.password 
      const updatedUserPassword = await user.save()
      res.json({
        "message":"PasswordUpdated!!"
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })

 const contactPost= asyncHandler(async(req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.comment}</p>
  `;
  console.log(output)
   // create reusable transporter object using the default SMTP transport
   let transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "info@americanfarminvestr.com", // generated ethereal user
      pass: "Derryukere1256"  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });
  
  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Tech Prime" <info@americanfarminvestr.com>', // sender address
    to: 'mudiagaukere@gmail.com', // list of receivers
    subject: 'New Contact Request', // Subject line
    text: 'contact Request', // plain text body
    html: output // html body
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('there was an error: ', error);
    } else {
      console.log('Message sent: %s', info.messageId); 
      res.status(200).json('contact message sent');
    } 
    
  });
  
  
})
  
    

  
   export {
     authUser,
     registerUser,
     getUserProfile,
     updateUserProfile,
     getUsers,
     deleteUser,
     getUserById,
     updateUser,
     resetPassword,
     getUserByToken,
     updateUserPassword,
     contactPost
   }


  