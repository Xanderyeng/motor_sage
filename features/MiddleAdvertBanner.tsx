import Image from "next/image";
import image1 from '@images/car_4.webp';
import image2 from '@images/car_2.webp';

export default function MiddleAdvertBanner() {
  return (
    <>
   <div className="bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(../images/showroom.webp)`, backgroundAttachment: "fixed", backgroundSize: "cover" }}>
      <div className="container lg:p-0">
        <div className=" w-7/12 flex flex-row gap-8 justify-between py-16">

          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <div className=" shadow-md rounded-lg text-left p-4" style={{ backgroundColor: "rgba(254, 254, 254, 0.9)" }}>
              <div className="flex flex-row">
                <div className="w-full lg:w-3/4 sm:pr-4">
                  <h6 className="text-lg font-medium font-inter text-[#F44336]">All Bells & whistles</h6>
                  <h4 className="text-3xl font-medium mt-2 mb-3">Audi Q7</h4>
                  <p style={{ color: "#999", fontWeight: "400", fontSize: "14px" }}>Sale up to 25% off all in store</p>
                </div>
                <div className="w-full mt-6 sm:mt-0 ">
                  <Image src={image1} style={{ objectFit: "cover", width: "100%", height: "100%", paddingTop: "18px", paddingBottom: "0px" }} alt={'image1'} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <div className="rounded-lg text-left p-4" style={{ backgroundColor: "rgba(254, 254, 254, 0.9)" }} >
              <div className="flex flex-row">
                <div className="w-full lg:w-3/4 sm:pr-4">
                <h6 className="text-lg font-medium font-inter text-[#F44336]">Eco Drive & Off-Road</h6>
                  <h4 className="text-3xl font-medium mt-2 mb-3">Ford Focus</h4>
                  <span style={{ color: "#999", fontWeight: "400", fontSize: "14px" }}>Order today and save up to 48%</span>
                </div>
                <div className="w-full mt-3 sm:mt-0 h-36">
                <Image src={image2} style={{ objectFit: "cover", width: "100%", height: "100%" }} alt={'image2'} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
