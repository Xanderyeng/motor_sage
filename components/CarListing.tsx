import React, { useState, useEffect, Dispatch } from "react";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { fetchCarListingData } from "@/app/api/CarsFetchList";
import { CarAction } from "@/app/page";
import { CarType } from "@/types/Types";
import { formatValue } from "@/utils/formatValue";

interface CarListingProps {
  isLoading: boolean;
  dispatch: Dispatch<CarAction>;
}

export default function CarListing({ isLoading, dispatch }: CarListingProps) {
  const [cars, setCars] = useState<CarType[]>([]);
  // const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9); // Number of items per page
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCarListingData(currentPage, pageSize);
        setCars(data.result);
        setTotalPages(Math.ceil(data.pagination.total / pageSize));
        // setLoading(false);
        dispatch({ type: "loading", payload: false });
      } catch (error) {
        console.error(error);
        // setLoading(false);
        dispatch({ type: "loading", payload: false });
      }
    }

    fetchData();
  }, [currentPage, pageSize]);

  // const handlePageChange = (newPage: number) => {
  //   setCurrentPage(newPage);
  // };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (isLoading) {
    return <p>Loading cars...</p>;
  }

  console.log(cars);
  console.log(totalPages);

  return (
    <>
      {/* Display the total number of car results */}
      <div className='text-left mb-4'>
        <p>{totalPages}: Results</p>
      </div>
      <div className='car-list relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {cars.map((car) => (
          <Link href={`/car/${car.id}`} key={car.id}>
            <div className='bg-white rounded-lg shadow-lg overflow-hidden group relative'>
              <div className='relative'>
                <img
                  src={car.imageUrl}
                  alt={car.title}
                  className='w-full h-64 object-cover'
                />
                <div className='absolute top-2 right-2 p-2 bg-blue-600 text-white font-semibold rounded'>
                  {formatValue(car.marketplacePrice, "", "KES")}
                </div>
              </div>
              <div className='p-4 group-hover:bg-gray-100'>
                <h2 className='text-xl font-semibold mb-2'>{car.title}</h2>
                <p className='text-gray-600'>
                  Year: {car.year} | City: {car.city} | State: {car.state}
                </p>
                <a
                  href={car.websiteUrl}
                  className='absolute bottom-0 left-0 right-0 p-4 bg-blue-600 text-white text-center transform -translate-y-full transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0'
                >
                  View Details
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className='pagination flex items-center justify-center my-4'>
        {currentPage > 1 && (
          <button
            onClick={handlePreviousPage}
            className='text-blue-500 font-semibold mr-4'
          >
            <IoIosArrowBack size={24} />
          </button>
        )}
        <p className='text-gray-600'>
          Page <span className=' font-bold'>{currentPage}</span> of {totalPages}
        </p>
        {currentPage < totalPages && (
          <button
            onClick={handleNextPage}
            className='text-blue-500 font-semibold ml-4'
          >
            <IoIosArrowForward size={24} />
          </button>
        )}
      </div>
    </>
  );
}
