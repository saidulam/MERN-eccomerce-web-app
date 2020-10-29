import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/UserModel.js'
import  OAuth2client  from "google-auth-library";



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


  
  export {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
  }