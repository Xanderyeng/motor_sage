import React from "react";
import { motion } from "framer-motion";

export default function CarSpecifications({ carDetails }) {
  return (
    <>
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
    </>
  );
}
