import { CarImage } from "@/types/Types";
import React from "react";
import ReactPlayer from "react-player";
import { SourceProps } from "react-player/base";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarMediaCarouselProps {
    carImages: CarImage[];
  }

const carouselItemWidth = "486px";
const carouselItemHeight = "336px";

export default function CarMediaCarousel({ carImages }: CarMediaCarouselProps) {
  return (
    <>
       <div className="relative w-full">
      <Carousel showThumbs={true} showIndicators={true} width="100%" dynamicHeight={false}>
        {carImages?.map((media) => (
           <div
           key={media.id}
           className={`rounded-lg overflow-hidden w-full h-[400px]`}
         >
           {media.type === "image/jpeg" ? (
             <img
               src={media.url}
               alt={media.name}
               className=' object-contain w-full h-full'
             />
           ) : media.type === "video/mp4" ? (
             <ReactPlayer
               url={media.url}
               controls={true}
               width={carouselItemWidth}
               height={carouselItemHeight}
             />
           ) : (
             <img src={media.url} alt={media.name} className=' object-contain w-full h-[100%]' />
           )}
         </div>
        ))}
      </Carousel>
    </div>
    </>
  );
}
