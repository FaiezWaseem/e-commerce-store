import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Crousel() {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={2000} >
                <div>
                    <img src="https://www.nolimitlogic.com/demo/multi-ecommerce/public/uploads/shop/sliders/1564063102.BANNER3.jpg" />
                    <p className="legend">Bold</p>
                </div>
                <div>
                    <img src="https://www.nolimitlogic.com/demo/multi-ecommerce/public/uploads/shop/sliders/1564063039.BANNER1.jpg" />
                    <p className="legend">Shine</p>
                </div>
                <div>
                    <img src="https://www.nolimitlogic.com/demo/multi-ecommerce/public/uploads/shop/sliders/1564063091.BANNER2.jpg" />
                    <p className="legend">Rise</p>
                </div>
            </Carousel>
  )
}
