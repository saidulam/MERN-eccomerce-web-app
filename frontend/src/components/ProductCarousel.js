import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (

  <Carousel className= "">
  {products.map((product) => (
  <Carousel.Item>
  <Link to={`/product/${product._id}`}>
    <img
      src={product.image} rounded
      alt="First slide"
      style ={{maxWidth:'1200px',width:'100%',height: "calc((var(--vh, 1vh) * 50))",display : "block",border:'2px',padding:'10px'}}
    />
    </Link>
  </Carousel.Item>
  ))}
</Carousel>
  )
}

export default ProductCarousel




// <div class="flickity-viewport" style="touch-action: pan-y;">
//     <div class="flickity-slider" style="left: 0px; transform: translateX(-100%);">
//         <div class="carousel-cell" style="background-image: url('https://assets.bigcartel.com/theme_images/56543036/IMG_6708.jpg?auto=format&amp;fit=max&amp;w=1500'); position: absolute; left: 0%;" aria-hidden="true"></div>
//         <div class="carousel-cell is-selected" style="background-image: url('https://assets.bigcartel.com/theme_images/56543045/IMG_6698.JPG?auto=format&amp;fit=max&amp;w=1500'); position: absolute; left: 100%;"></div>
//         <div class="carousel-cell" style="background-image: url('https://assets.bigcartel.com/theme_images/56543066/IMG_4861.jpg?auto=format&amp;fit=max&amp;w=1500'); position: absolute; left: 200%;" aria-hidden="true"></div>
//         <div
//             class="carousel-cell"
//             style="background-image: url('https://assets.bigcartel.com/theme_images/56543381/E63E1B43-7755-4B07-B3ED-25D562FD88FE.jpg?auto=format&amp;fit=max&amp;w=1500'); position: absolute; left: 300%;"
//             aria-hidden="true"
//         ></div>
//         <div class="carousel-cell" style="background-image: url('https://assets.bigcartel.com/theme_images/56543390/IMG_2936.jpg?auto=format&amp;fit=max&amp;w=1500'); position: absolute; left: 400%;" aria-hidden="true"></div>
//     </div>
// </div>
