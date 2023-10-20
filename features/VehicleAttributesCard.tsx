import { formatValue } from "@/utils/formatValue";
import { motion } from "framer-motion";

export default function VehicleAttributesCard({ carDetails }: any) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className=' w-5/12 gap-4 flex flex-row p-8  mx-auto mt-8 bg-white rounded-lg shadow-lg'
      >
        <div className='w-full '>
          <div className='flex flex-row flex-wrap justify-between items-center'>
            <h2 className='text-3xl font-semibold'>{carDetails.carName}</h2>
            <div className='text-2xl text-blue-600'>
              {formatValue(carDetails.marketplacePrice, "", "KES")}
            </div>
          </div>
          <div className='mt-4'>
            <p>
              Year:{" "}
              <span className=' font-bold text-lg'>{carDetails.year}</span>
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
              <span className=' font-bold text-lg'>{carDetails.state}</span>
            </p>
            <p>
              Owner Type:{" "}
              <span className=' font-bold text-lg'>{carDetails.ownerType}</span>
            </p>
            <p>
              Transmission:{" "}
              <span className=' font-bold text-lg'>
                {carDetails.transmission}
              </span>
            </p>
            <p>
              Fuel Type:{" "}
              <span className=' font-bold text-lg'>{carDetails.fuelType}</span>
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
    </>
  );
}
