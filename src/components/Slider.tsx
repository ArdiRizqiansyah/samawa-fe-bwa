"use client";

import React, { Children, ReactNode } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';

import 'swiper/css';

type Props = {
  children: React.ReactNode,
  swiperClassName?: string,
  swipperSliderClassName?: string,
}

const Slider = ({
  children,
  swiperClassName,
  swipperSliderClassName,
}: Props) => {
  return (
    <Swiper
      loop={true}
      centeredSlides={true}
      slidesPerView="auto"
      modules={[Navigation, A11y]}
      className={swiperClassName}
    >
      {Children.toArray(children).map( (item: ReactNode) => {
        return <SwiperSlide className={swipperSliderClassName} key={Math.random()}>
          {item}
        </SwiperSlide>;
      })}
      {Children.toArray(children).map( (item: ReactNode) => {
        return <SwiperSlide className={swipperSliderClassName} key={Math.random()}>
          {item}
        </SwiperSlide>;
      })}
    </Swiper>
  )
}

export default Slider;