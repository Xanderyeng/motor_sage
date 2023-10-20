"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CarDetailsType, CarImagesState } from "@/types/Types";
import { fetchCarDetails } from "@/utils/fetchCarDetails";
import { fetchCarImages } from "@/utils/fetchCarImages";
import VehicleAttributesCard from "@/features/VehicleAttributesCard";
import CarMediaCarousel from "@/features/CarMediaCarousel";
import CarSpecifications from "@/features/CarSpecifications";
import VehicleAdditionalInfo from "@/features/VehicleAdditionalInfo";

export default function CarDetails({ params }: { params: { id: string } }) {
  const [carDetails, setcarDetails] = useState<CarDetailsType | null>(null);
  const [carImages, setCarImages] = useState<CarImagesState | null>(null);

  useEffect(() => {
    async function fetchCarData() {
      try {
        const data = await fetchCarDetails({ params });
        setcarDetails(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCarData();
    console.log(`Details of the car: ${params.id}`);
  }, [params]);

  useEffect(() => {
    async function fetchCarMedia() {
      try {
        const images = await fetchCarImages({ params });
        setCarImages(images);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCarMedia();
  }, [params]);

  return (
    <>
      <div className=''>
        <div className='min-h-screen w-full flex flex-col items-center justify-center pt-2 bg-gray-100'>
          <AnimatePresence>
            {carDetails && (
              <>
                <div className=' w-10/12 flex flex-row justify-between border-2 border-orange-600 align-middle '>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className='w-6/12 gap-4 flex flex-col p-4 mx-auto mt-8 bg-white rounded-lg shadow-lg border-2 border-green-500'
                  >
                    <>
                    {carImages ? (
                          /* -------- CAROUSEL ------- */
                          <CarMediaCarousel carImages={carImages} />
                        ) : (
                          <p>Loading car images...</p>
                        )}
                    </>
                  </motion.div>
                 <VehicleAttributesCard carDetails={carDetails} />
                </div>
                <div className=' flex flex-row w-10/12 px-4 gap-8 justify-center align-middle '>
                   <CarSpecifications carDetails={carDetails}/>
                 <VehicleAdditionalInfo carDetails={carDetails} />
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
