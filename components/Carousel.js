'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AcademicCapIcon, Battery100Icon, BoltIcon, CheckIcon, CurrencyDollarIcon, VideoCameraIcon, WifiIcon, TvIcon, ShoppingBagIcon,BeakerIcon} from '@heroicons/react/24/solid'


function Carousel() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1,
              dots:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots:false
            }
          }
        ]
      };
      return (
        <div className="slider-container">
          <Slider {...settings} className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <AcademicCapIcon className='h-8 text-gray-600 text-center'/>
              <p>AcademicCapIcon</p>
            </div>
            <div className="flex items-center justify-center">
              <Battery100Icon className='carousel-card'/>
                <p>Battery100Icon</p>
            </div >
            <div className="flex items-center justify-center">
              <BoltIcon className='carousel-card'/>
              <p>BoltIcon</p>
            </div>
            <div className="flex items-center justify-center">
              <CheckIcon className='carousel-card'/>
              <p>CheckIcon</p>
            </div>
            <div >
              <CurrencyDollarIcon className='carousel-card'/>
              <p>CurrencyDollarIcon</p>
            </div>
            <div >
              <VideoCameraIcon className='carousel-card'/>
              <p>VideoCameraIcon</p>
            </div>
            <div >
              <WifiIcon className='carousel-card'/>
              <p>WifiIcon</p>
            </div>
            <div >
              <TvIcon className='carousel-card'/>
              <p>TvIcon</p>
            </div>
            <div >
                <ShoppingBagIcon className='carousel-card'/>
                <p>ShoppingBagIcon</p>
            </div>
            <div>
                <BeakerIcon className='carousel-card'/>
                <p>BeakerIcon</p>
            </div>
            <div className="flex items-center justify-center">
              <AcademicCapIcon className='carousel-card'/>
              <p>AcademicCap</p>
            </div>
            <div className="flex items-center justify-center">
              <AcademicCapIcon className='carousel-card'/>
              <p>AcademicCap</p>
            </div>
            <div className="flex items-center justify-center">
              <AcademicCapIcon className='carousel-card'/>
              <p>AcademicCap</p>
            </div>
            <div className="flex items-center justify-center">
              <AcademicCapIcon className='carousel-card'/>
              <p>AcademicCap</p>
            </div>
          </Slider>
        </div>
      );
}

export default Carousel;

