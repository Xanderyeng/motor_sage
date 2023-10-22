import React from "react";
import Image from "next/image";
import car from '@images/car_2.webp'

export default function Offers() {
  
const imageStyle = {
  justify: "left",
}
  return (
    <>
    <div className="mx-auto p-4 w-[35vw]" style={{ maxWidth: "35vw" }}>
      <div className="flex flex-row justify-between md:flex-row items-center">
        <div className="md:w-8/12 w-2/12 text-center md:text-left ">
          <h3 className="text-5xl font-semibold text-orange-700" style={{ color: 'black', fontSize: "48px", textAlign: "right", width: "100%"}}>Summer Car Sale!</h3>
        </div>
          <Image
            src={car}
            className="object-contain" 
            height={300} 
            alt="car"
          />
      </div>
    </div>
    </>
  );
}
