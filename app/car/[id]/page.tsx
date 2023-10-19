"use client"
import React, { useEffect, useState }from 'react'
// import { useRouter } from "next/navigation"
import { CarDetailsType } from '@/types/Types';

const apiUrl = `https://api-prod.autochek.africa/v1/inventory/car/`;

export async function fetchCarDetails({ params}: { params: {id: string} }) {
  const url = `${apiUrl}${params.id}`;
 
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch car Details. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching car details:", error);
    return null;
  }
}

export default function CarDetails({ params }: { params: {id: string} }) {
  const [carDetails, setcarDetails] = useState<CarDetailsType | null>(null)

  useEffect(() => {
   async function fetchCarData() {
    try {
      const data = await fetchCarDetails({ params });
      setcarDetails(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
   }
  fetchCarData();
  console.log(`Details of the car: ${params.id}`);
}, [params])

console.log(carDetails?.model?.name);

  return (
    <>
     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {carDetails ? (
        <div className="bg-black text-white w-11/12 max-w-2xl p-8 rounded-lg shadow-lg">
          <div className="relative">
            <img
              src={carDetails.imageUrl}
              alt={carDetails.carName}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4">
              <span className="text-lg font-semibold">
                ${carDetails.marketplacePrice}
              </span>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-semibold mb-4">{carDetails.carName}</h2>
            <div className="flex items-center mb-4">
              <p className="text-lg">{carDetails.year}</p>
              <span className="mx-4">•</span>
              <p className="text-lg">{carDetails.mileage} km</p>
            </div>
            <p className="text-lg">{carDetails.model.name}</p>
            <p className="text-lg">{carDetails.state}</p>
            <p className="text-lg">Owner Type: {carDetails.ownerType}</p>
            <p className="text-lg">Transmission: {carDetails.transmission}</p>
            <p className="text-lg">Fuel Type: {carDetails.fuelType}</p>
            <p className="text-lg">Selling Condition: {carDetails.sellingCondition}</p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Car Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-lg">Interior Color: {carDetails.interiorColor}</p>
                <p className="text-lg">Exterior Color: {carDetails.exteriorColor}</p>
                <p className="text-lg">Engine Type: {carDetails.engineType}</p>
              </div>
              <div>
                <p className="text-lg">Grade Score: {carDetails.gradeScore}</p>
                <p className="text-lg">Installment: ${carDetails.installment} per month</p>
                <p className="text-lg">Loan Value: ${carDetails.loanValue}</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Additional Information</h3>
            <p className="text-lg">
              Has Financing: {carDetails.hasFinancing ? 'Yes' : 'No'}
            </p>
            <p className="text-lg">Inspector: {carDetails.inspectorDetails?.inspectorFullName}</p>
            <p className="text-lg">Workshop: {carDetails.inspectorDetails?.workshopName}</p>
            <p className="text-lg">Total Inspections: {carDetails.inspectorDetails?.totalInspection}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
}