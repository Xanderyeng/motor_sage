import React from "react";
import { motion } from "framer-motion";

export default function VehicleAdditionalInfo({ carDetails }) {
  return (
    <>
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-6/12 h-auto p-4 mx-auto mt-4 bg-white rounded-lg shadow-lg"
    >
      <div className="flex flex-col gap-2 flex-grow mt-4 cardTextStyles card-text-style px-4">
        <h3 className="text-2xl font-semibold">Additional Information</h3>
        <>
        <p>Has Financing: <span>{carDetails.hasFinancing ? "Yes" : "No"}</span></p>
        <p>Inspector: <span>{carDetails.inspectorDetails?.inspectorFullName}</span></p>
        <p>Workshop: <span>{carDetails.inspectorDetails?.workshopName}</span></p>
        <p>Total Inspections: <span>{carDetails.inspectorDetails?.totalInspection}</span></p>
        </>
      </div>
    </motion.div>
    </>
  );
}
