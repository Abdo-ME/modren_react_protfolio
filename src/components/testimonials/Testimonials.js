import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import {Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import './testimonials.css'
const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: 'Tina Snow',
      review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid corrupti accusantium eum similique sequi dolores est debitis cumque commodi accusamus dolorem perspiciatis, corporis tenetur natus laboriosam sit illum ducimus non?'
    },
    {
      avatar: AVTR2,
      name: 'loka Bris',
      review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid corrupti accusantium eum similique sequi dolores est debitis cumque commodi accusamus dolorem perspiciatis, corporis tenetur natus laboriosam sit illum ducimus non?'
    },
    {
      avatar: AVTR3,
      name: 'Shata Wale',
      review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid corrupti accusantium eum similique sequi dolores est debitis cumque commodi accusamus dolorem perspiciatis, corporis tenetur natus laboriosam sit illum ducimus non?'
    },
    {
      avatar: AVTR4,
      name: 'John Snow',
      review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid corrupti accusantium eum similique sequi dolores est debitis cumque commodi accusamus dolorem perspiciatis, corporis tenetur natus laboriosam sit illum ducimus non?'
    },
  ]
  
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
        >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client__avatar">
              <img src={avatar} alt="Avatar" />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className="client__review">{review} </small>
          </SwiperSlide>
          ))
          }
        </Swiper>
        
      
    </section>
  )
}

export default Testimonials