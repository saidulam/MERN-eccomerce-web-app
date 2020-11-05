import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Topheader from './components/Topheader.js'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import AndroidScreen from './screens/AndroidScreen'
import IosScreen from './screens/IosScreen'
import LaptopsScreen from './screens/LaptopsScreen'
import AccessoriesScreen from './screens/AccessoriesScreen'
import ElectronicsScreen from './screens/ElectronicsScreen'
import ForgetPasswordScreen from './screens/ForgotPasswordScreen'
import UpdatePasswordScreen from './screens/UpdatePasswordScreen'
import AboutUsScreen from './screens/AboutUsScreen'
import contactUsScreen from './screens/contactUsScreen'
import RefundScreen from './screens/RefundPolicy.js'
import DeliveryScreen from './screens/DeliverScreen.js'


const App = () => {
  return (
    <Router>
      <Topheader />
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/categories/Andriods' component={AndroidScreen} />
          <Route path='/categories/IOS' component={IosScreen} />
          <Route path='/categories/laptops' component={LaptopsScreen} />
          <Route path='/categories/accessories' component={AccessoriesScreen} />
          <Route path='/categories/electronics' component={ElectronicsScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/about' component={AboutUsScreen} />
          <Route path='/policy' component={RefundScreen} />
          <Route path='/contact' component={contactUsScreen} />
          <Route path='/delivery' component={DeliveryScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/reset' component={ForgetPasswordScreen} />
          <Route path='/updatePassword/:id' component={UpdatePasswordScreen } />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App


// TODO
// category dropdown
// facebook and google login
// reset password
// pagination for category