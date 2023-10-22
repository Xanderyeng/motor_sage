"use client"
import React, { useState, useEffect } from 'react';
import { CarImagesState } from "@/types/Types";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const sampleCarUrl = `https://api-prod.autochek.africa/v1/inventory/car_media?carId=R1nVTV4Mj`;
const carouselItemWidth = "100%";
const carouselItemHeight = "380px";

export default function PopularCars() {
    const [carImages, setCarImages] = useState<CarImagesState | null>(null);

    useEffect(() => {
        async function fetchCarMedia() {
            const url = `${sampleCarUrl}`;
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Failed to fetch car images. Status: ${response.status}`);
              }
              const data = await response.json();
              setCarImages(data.carMediaList)
              return carImages;
            } catch (error) {
              console.error("Error fetching car images:", error);
              return null;
            }
        }
        fetchCarMedia();
      }, []);

  return (
    <div className="w-full h-auto">
    <Carousel showThumbs={true} showIndicators={true} className=''>
          {carImages?.map((media) => (
            <div
              key={media.id}
              className={`rounded-lg overflow-hidden w-full h-[400px]`}
            >
              {media.type === "image/jpeg" ? (
                <img
                  src={media.url}
                  alt={media.name}
                  className=' object-cover w-full h-full'
                />
              ) : media.type === "video/mp4" ? (
                <ReactPlayer
                  url={media.url}
                  controls={true}
                  width={carouselItemWidth}
                  height={carouselItemHeight}
                />
              ) : (
                <img src={media.url} alt={media.name} />
              )}
            </div>
          ))}
        </Carousel>
    </div>
  )
}
