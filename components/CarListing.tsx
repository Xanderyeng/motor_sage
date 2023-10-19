import React, { useState, useEffect } from "react";
import { CarType } from "@/types/Types";

export default function CarListing() {
  const [cars, setCars] = useState<CarType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint
    const apiUrl = "https://api.staging.myautochek.com/v1/inventory/car/search";

    // Fetch the list of cars from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCars(data.result); // Assuming your cars are inside the 'result' property
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching car list:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading cars...</p>;
  }

  return (
    <div className='car-list flex flex-wrap'>
  {cars.map((car) => (
    <div className='w-full md:w-1/2 lg:w-1/3 p-2' key={car.id}>
      <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
        <img
          src={car.imageUrl}
          alt={car.title}
          className='w-full h-48 object-cover'
        />
        <div className='p-4'>
          <h2 className='text-xl font-semibold mb-2'>{car.title}</h2>
          <p className='text-gray-600'>
            Year: {car.year} | City: {car.city} | State: {car.state}
          </p>
          <p className='text-gray-700'>Price: ${car.marketplacePrice}</p>
        </div>
        <div className='bg-gray-100 p-4'>
          <a
            href={car.websiteUrl}
            className='block text-center text-blue-500 hover:text-blue-700 font-semibold'
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
  );
}
