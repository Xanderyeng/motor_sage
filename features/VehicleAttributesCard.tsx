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
        <div className='w-full flex flex-col flex-1 py-4 px-8 gap-4'>
          <div className='flex flex-col gap-4 flex-wrap justify-between items-left'>
            <h2 className='text-3xl font-semibold'>{carDetails.carName}</h2>
            <div className='text-2xl text-blue-600'>
              {formatValue(carDetails.marketplacePrice, "", "KES")}
            </div>
          </div>
          <div className='mt-4 cardTextStyles card-text-style'>
          <p><span>Year:</span> <span>{carDetails.year}</span></p>
          <p><span>Mileage:</span> <span>{formatValue(carDetails.mileage, "Km")}</span></p>
          <p><span>Model:</span> <span>{carDetails.model.name}</span></p>
          <p><span>State:</span> <span>{carDetails.state}</span></p>
          <p><span>Owner Type:</span> <span>{carDetails.ownerType}</span></p>
          <p><span>Transmission:</span> <span>{carDetails.transmission}</span></p>
          <p><span>Fuel Type:</span> <span>{carDetails.fuelType}</span></p>
          <p><span>Selling Condition:</span> <span>{carDetails.sellingCondition}</span></p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
