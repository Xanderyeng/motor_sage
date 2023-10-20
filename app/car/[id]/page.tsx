"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarDetailsType, CarImagesState } from "@/types/Types";
import { formatValue } from "@/utils/formatValue";

const apiUrl = `https://api-prod.autochek.africa/v1/inventory/car/`;
// const apiUrlMedia = `https://api-prod.autochek.africa/v1/inventory/car_media?carId=`;
const apiUrlMedia = `https://api-prod.autochek.africa/v1/inventory/car_media?carId=R1nVTV4Mj`;

export async function fetchCarDetails({ params }: { params: { id: string } }) {
  const url = `${apiUrl}${params.id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch car Details. Status: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching car details:", error);
    return null;
  }
}

async function fetchCarImages({ params }: { params: { id: string } }) {
  const url = `${apiUrlMedia}`;
  console.log(url)
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch car images. Status: ${response.status}`);
    }
    const data = await response.json();
    return data.carMediaList;
  } catch (error) {
    console.error("Error fetching car images:", error);
    return null;
  }
}



export default function CarDetails({ params }: { params: { id: string } }) {
  const [carDetails, setcarDetails] = useState<CarDetailsType | null>(null);
  const [carImages, setCarImages] = useState<CarImagesState | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);


  useEffect(() => {
    async function fetchCarData() {
      try {
        const data = await fetchCarDetails({ params });
        setcarDetails(data);
        console.log(data);
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
        console.log(images)
      } catch (error) {
        console.log(error);
      }
    }
    fetchCarMedia();
  }, [params]);

  console.log(carDetails?.model?.name);
  // console.log(carImages)

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
                    className='w-auto gap-4 flex flex-col p-4 mx-auto mt-8 bg-white rounded-lg shadow-lg border-2 border-green-500'
                  >
                    <>
                      {/* CAR IMAGE */}
                      {/* <div className='relative max-w-md'>
                        <motion.img
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          src={carDetails.imageUrl}
                          alt={carDetails.carName}
                          className='w-full h-96 object-cover rounded-lg'
                        />
                      </div> */}
                        {/* <div className='absolute top-4 right-4'>
                          <span className='text-lg font-semibold'>
                            ${carDetails.marketplacePrice}
                          </span>
                        </div> */}
                      {/* -------- CAROUSEL ------- */}
                    <div className='relative max-w-md'>
                          <Carousel showThumbs={true}>
                            {carImages?.map((carImages) => (
                            <div key={carImages.id}>
                            <img src={carImages.url} alt={carImages.name} />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                    </>
                   
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className=' w-5/12 gap-4 flex flex-row p-8  mx-auto mt-8 bg-white rounded-lg shadow-lg'
                  >
                  <div className='w-full '>
                      <div className='flex flex-row flex-wrap justify-between items-center'>
                        <h2 className='text-3xl font-semibold'>
                          {carDetails.carName}
                        </h2>
                        <div className='text-2xl text-blue-600'>
                          {formatValue(carDetails.marketplacePrice, "", "KES")}
                        </div>
                      </div>
                      <div className='mt-4'>
                        <p>
                          Year:{" "}
                          <span className=' font-bold text-lg'>
                            {carDetails.year}
                          </span>
                        </p>
                        <p>
                          Mileage:{" "}
                          <span className=' font-bold text-lg'>
                            {formatValue(carDetails.mileage, "Km")}
                          </span>
                        </p>
                        <p>
                          Model:{" "}
                          <span className=' font-bold text-lg'>
                            {carDetails.model.name}
                          </span>
                        </p>
                        <p>
                          State:{" "}
                          <span className=' font-bold text-lg'>
                            {carDetails.state}
                          </span>
                        </p>
                        <p>
                          Owner Type:{" "}
                          <span className=' font-bold text-lg'>
                            {carDetails.ownerType}
                          </span>
                        </p>
                        <p>
                          Transmission:{" "}
                          <span className=' font-bold text-lg'>
                            {carDetails.transmission}
                          </span>
                        </p>
                        <p>
                          Fuel Type:{" "}
                          <span className=' font-bold text-lg'>
                            {carDetails.fuelType}
                          </span>
                        </p>
                        <p>
                          Selling Condition:{" "}
                          <span className=' font-bold text-lg'>
                            {carDetails.sellingCondition}
                          </span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className=' flex flex-row max-w-6xl gap-16 justify-center align-middle '>
                  {/* ----- CAR SPECS SECTION ------ */}

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className='w-11/12 max-w-2xl p-8 mx-auto mt-4 bg-white rounded-lg shadow-lg'
                  >
                    <div className='mt-4'>
                      <h3 className='text-2xl font-semibold'>
                        Car Specifications
                      </h3>
                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <p>Interior Color: {carDetails.interiorColor}</p>
                          <p>Exterior Color: {carDetails.exteriorColor}</p>
                          <p>Engine Type: {carDetails.engineType}</p>
                        </div>
                        <div>
                          <p>Grade Score: {carDetails.gradeScore}</p>
                          <p>
                            Installment: ${carDetails.installment} per month
                          </p>
                          <p>Loan Value: ${carDetails.loanValue}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  {/* ----- CAR SPECS SECTION ------ */}

                  {/* -------- ADDITIONAL INFO ------- */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className='w-11/12 max-w-2xl p-8 mx-auto mt-4 bg-white rounded-lg shadow-lg'
                  >
                    <div className='mt-4'>
                      <h3 className='text-2xl font-semibold'>
                        Additional Information
                      </h3>
                      <p>
                        Has Financing: {carDetails.hasFinancing ? "Yes" : "No"}
                      </p>
                      <p>
                        Inspector:{" "}
                        {carDetails.inspectorDetails?.inspectorFullName}
                      </p>
                      <p>
                        Workshop: {carDetails.inspectorDetails?.workshopName}
                      </p>
                      <p>
                        Total Inspections:{" "}
                        {carDetails.inspectorDetails?.totalInspection}
                      </p>
                    </div>
                  </motion.div>
                  {/* -------- ADDITIONAL INFO ------- */}
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
