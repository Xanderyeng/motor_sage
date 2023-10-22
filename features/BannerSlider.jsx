import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/bundle';
import carImage1 from "@images/car_1.webp";
import carImage2 from "@images/car_2.webp";
import carImage3 from "@images/car_3.webp";
import carImage4 from "@images/car_4.webp";
import Image from 'next/image';

const sliderImages = [
  {
    imageUrl: carImage1,
    id: 1,
  },
  {
    imageUrl: carImage2,
    id: 2,
  },
  {
    imageUrl: carImage3,
    id: 3,
  },
  {
    imageUrl: carImage4,
    id: 4,
  },
];

export default function BannerSlider() {
  return (
   <div className="swiper mt-4">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      lazy={true}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      className="mySwiper"
    >
    {sliderImages.map((slide) => ( 
      <SwiperSlide>
          <Image src={slide.imageUrl} key={slide.id} style={{ objectFit: "contain" }} alt={'cars'} />
        </SwiperSlide>
    ))}       
      </Swiper>
   </div>
  )
}
