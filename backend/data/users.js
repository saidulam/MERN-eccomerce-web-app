import bcrpt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrpt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'john doe',
    email: 'john@gmail.com',
    password: bcrpt.hashSync('123456', 10),
  },
  {
    name: 'jane doe',
    email: 'jean@gmail.com',
    password: bcrpt.hashSync('123456', 10),
  },
]

export default users
