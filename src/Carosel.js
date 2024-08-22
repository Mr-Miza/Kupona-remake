import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import zara from './images/zara.png';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function Carosel() {
    return (
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>

<div className='cupons'>
                        <img src={zara} alt=''/>
                        <div className="cupon-description">
                            <p> Something aint going right </p>
                            <p> 100% off </p>    
                        </div>
                    </div> 
 <div className='cupons'>
                        <img src={zara} alt=''/>
                        <div className="cupon-description">
                            <p> Something aint going right </p>
                            <p> 25% off </p>    
                        </div>
                    </div> 
   <div className='cupons'>
                        <img src={zara} alt=''/>
                        <div className="cupon-description">
                            <p> Something aint going right </p>
                            <p> 10% off </p>    
                        </div>
                    </div> 
     <div className='cupons'>
                        <img src={zara} alt=''/>
                        <div className="cupon-description">
                            <p> Something aint going right </p>
                            <p> 30% off </p>    
                        </div>
                    </div> 
</Carousel>
    );
}
export default Carosel;