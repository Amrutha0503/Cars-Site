import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
export default function Caruosel() {
    return (
        <div className='contianer'>
            <Carousel className='carousel'>
                <Carousel.Item>
                    <img 
                    width='100%'
                    src='https://fastly.picsum.photos/id/551/1000/300.jpg?hmac=kakpvZPZzYmDFXWzuvHm3oqNw3FWMjY-T4nU6HG0eYA'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width='100%' src='https://fastly.picsum.photos/id/563/1000/300.jpg?hmac=hIWABLBO1jcEZVSxMmcL7EfhMDPsPW8LezYFKc8ENdk'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img width='100%' src='https://fastly.picsum.photos/id/549/1000/300.jpg?hmac=g4uoQm1FdEyXq02Y5qHD5bZaaKwmxJRUr5pnFWuwN1g'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
