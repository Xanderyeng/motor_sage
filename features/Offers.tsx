import React from "react";
import Image from "next/image";
import car from '@images/car_2.webp'

export default function Offers() {
  
const imageStyle = {
  // objectFit: "contain",
  justify: "left",
  // maxWidth: "100%",
  // height: "auto"
}
  return (
    <>
    <div className="mx-auto p-4 w-[35vw]" style={{ maxWidth: "35vw" }}>
      <div className="flex flex-row justify-between md:flex-row items-center">
        <div className="md:w-8/12 w-2/12 text-center md:text-left ">
          <h3 className="text-5xl font-semibold text-orange-700" style={{ color: 'black', fontSize: "48px", textAlign: "right", width: "100%"}}>Summer Car Sale!</h3>
          {/* You can add a discount message if needed */}
          {/* <p className="text-gray-600">Get an Extra 18% Off!</p> */}
        </div>
        {/* <div className="md:w-4/12 mt-4 md:mt-0 text-center md:text-right">
        </div> */}
          <Image
            src={car}
            className="object-contain"
            style={imageStyle}
            // width={'100%'}  
            height={300} 
            alt="car"
          />
      </div>
    </div>
    </>
  );
}
