"use client";
import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation"
import { CarDetailsType } from "@/types/Types";
import { motion, AnimatePresence } from "framer-motion";

const apiUrl = `https://api-prod.autochek.africa/v1/inventory/car/`;

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

export default function CarDetails({ params }: { params: { id: string } }) {
  const [carDetails, setcarDetails] = useState<CarDetailsType | null>(null);

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

  console.log(carDetails?.model?.name);

  return (
    <>
    <div className="">
      <div className='min-h-screen w-full flex flex-col items-center justify-center pt-2 bg-gray-100'>
        <AnimatePresence>
          {carDetails && (
            <>
            <div className=" w-9/12 justify-center align-middle ">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='w-full gap-8 flex flex-row p-8  mx-auto mt-8 bg-white rounded-lg shadow-lg'
              >
                
                <>
                {/* CAR IMAGE */}
                <div className='relative max-w-md'>
                  
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    src={carDetails.imageUrl}
                    alt={carDetails.carName}
                    className='w-full h-96 object-cover rounded-lg'
                  />
                  <div className='absolute top-4 right-4'>
                    <span className='text-lg font-semibold'>
                      ${carDetails.marketplacePrice}
                    </span>
                  </div>
                </div>
              </>  
              <div className="w-full">
              <div className='flex justify-between items-center'>
                  <h2 className='text-3xl font-semibold'>
                    {carDetails.carName}
                  </h2>
                  <div className='text-2xl text-blue-600'>
                    ${carDetails.marketplacePrice}
                  </div>
                </div>
                <div className='mt-4'>
                  <p>Year: {carDetails.year}</p>
                  <p>Mileage: {carDetails.mileage} km</p>
                  <p>Model: {carDetails.model.name}</p>
                  <p>State: {carDetails.state}</p>
                  <p>Owner Type: {carDetails.ownerType}</p>
                  <p>Transmission: {carDetails.transmission}</p>
                  <p>Fuel Type: {carDetails.fuelType}</p>
                  <p>Selling Condition: {carDetails.sellingCondition}</p>
                </div>
                </div>
              </motion.div>
              
              </div>
               
              <div className=" flex flex-row max-w-6xl gap-16 justify-center align-middle ">
              {/* ----- CAR SPECS SECTION ------ */}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='w-11/12 max-w-2xl p-8 mx-auto mt-4 bg-white rounded-lg shadow-lg'
              >
                <div className='mt-4'>
                  <h3 className='text-2xl font-semibold'>Car Specifications</h3>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <p>Interior Color: {carDetails.interiorColor}</p>
                      <p>Exterior Color: {carDetails.exteriorColor}</p>
                      <p>Engine Type: {carDetails.engineType}</p>
                    </div>
                    <div>
                      <p>Grade Score: {carDetails.gradeScore}</p>
                      <p>Installment: ${carDetails.installment} per month</p>
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
                  <p>Has Financing: {carDetails.hasFinancing ? "Yes" : "No"}</p>
                  <p>
                    Inspector: {carDetails.inspectorDetails?.inspectorFullName}
                  </p>
                  <p>Workshop: {carDetails.inspectorDetails?.workshopName}</p>
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
