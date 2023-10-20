import React from 'react'
import { motion } from "framer-motion";

export default function VehicleAdditionalInfo({ carDetails }) {
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
                      <h3 className='text-2xl font-semibold'>
                        Additional Information
                      </h3>
                      <p>
                        Has Financing: {carDetails.hasFinancing ? "Yes" : "No"}
                      </p>
                      <p>
                        Inspector:{" "}
                        {carDetails.inspectorDetails?.inspectorFullName}
                      </p>
                      <p>
                        Workshop: {carDetails.inspectorDetails?.workshopName}
                      </p>
                      <p>
                        Total Inspections:{" "}
                        {carDetails.inspectorDetails?.totalInspection}
                      </p>
                    </div>
                  </motion.div>
    </>
  )
}
