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
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

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
    <Header brands={{
        makeList: [],
        pagination: {
          total: 0,
          currentPage: 0,
          pageSize: 0
        }
      }} />
      <>
        <div className='min-h-screen w-full flex flex-col items-center justify-center pt-2 bg-gray-100'>
          <AnimatePresence>
            {carDetails && (
              <>
                <div className=' relative w-10/12 flex flex-row justify-between align-middle '>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className=' relative w-6/12 gap-0 flex flex-col flex-shrink p-4 mx-auto mt-0 bg-white rounded-lg shadow-lg '
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
                <div className='container flex flex-row w-10/12 px-0 py-16 gap-8 justify-center align-middle'>
                        <CarSpecifications carDetails={carDetails} />
                        <VehicleAdditionalInfo carDetails={carDetails} />
                    </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </>
      <Footer/>
    </>
  );
}
