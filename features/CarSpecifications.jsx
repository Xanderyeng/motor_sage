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
      className="w-6/12  p-4 mx-auto mt-4 bg-white rounded-lg shadow-lg"
    >
      <div className="mt-4 flex flex-col px-4 gap-2">
        <h3 className="text-2xl font-semibold">Car Specifications</h3>
        <div className=" cardTextStyles card-text-style">
          <>
            <p>Interior Color: {carDetails.interiorColor}</p>
            <p>Exterior Color: {carDetails.exteriorColor}</p>
            <p>Engine Type: {carDetails.engineType}</p>
          </>
          <>
            <p>Grade Score: {carDetails.gradeScore}</p>
            <p>Installment: ${carDetails.installment} per month</p>
            <p>Loan Value: ${carDetails.loanValue}</p>
          </>
        </div>
      </div>
    </motion.div>
    </>
  );
}
