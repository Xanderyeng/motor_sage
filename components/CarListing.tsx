import React, { useState, useEffect } from "react";
import { CarType } from "@/types/Types";

export default function CarListing() {
  const [cars, setCars] = useState<CarType[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // API endpoint with Page Numbers
    const apiUrl = `https://api-prod.autochek.africa/v1/inventory/car/search?page_number=${currentPage}`;

    // Fetch the list of cars from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCars(data.result); // Assuming your cars are inside the 'result' property
        setTotalPages(Math.ceil(data.pagination.total / pageSize)); // Calculate total pages
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching car list:", error);
        setLoading(false);
      });
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

  if (loading) {
    return <p>Loading cars...</p>;
  }

  console.log(cars);
  console.log(totalPages);

  return (
    <>
     <div className="car-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cars.map((car) => (
        <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img src={car.imageUrl} alt={car.title} className="w-full h-64 object-cover" />
            <div className="absolute top-2 right-2 p-2 bg-blue-600 text-white font-semibold rounded">
              ${car.marketplacePrice}
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{car.title}</h2>
            <p className="text-gray-600">
              Year: {car.year} | City: {car.city} | State: {car.state}
            </p>
            <a
              href={car.websiteUrl}
              className="block text-blue-600 font-semibold hover:underline mt-4"
            >
              View Details
            </a>
          </div>
        </div>
      ))}
    </div>
    <div className="pagination flex items-center justify-center">
      {currentPage > 1 && (
        <button onClick={handlePreviousPage} className="text-blue-500 font-semibold">
          Previous
        </button>
      )}
      <p className="mx-4">
        Page {currentPage} of {totalPages}
      </p>
      {currentPage < totalPages && (
        <button onClick={handleNextPage} className="text-blue-500 font-semibold">
          Next
        </button>
      )}
    </div>
          

    </>
  );
}
