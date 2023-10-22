import Advert from "@/features/Advert";
import Brands from "@/features/Brands";
import QuickLinks from "@/features/QuickLinks";
import GetInTouch from "@/features/GetInTouch";
import Newsletter from "@/features/Newsletter";
import SocialIcons from "@/features/SocialIcons";
import PaymentMethods from "@/features/PaymentMethods";
import Copyright from "@/features/Copyright";

export default function Footer() {
  return (
    <>
      {/* <!-- footer --> */}
      <footer>
        <Advert />
        {/* <!-- footer third section --> */}
        {/* <div className="bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(../images/bg.jpg)` }}>
    </div> */}
     <div className="bg-gray-900 p-4 flex justify-between" style={{ backgroundColor: "#333" }}>
      <div className="w-full md:w-1/4 p-4">
        <div className=" rounded-lg flex items-center justify-center">
        <Brands />
        </div>
      </div>
      <div className="w-full md:w-1/4 p-4">
        <div className=" rounded-lg flex items-center justify-center">
          <QuickLinks />
        </div>
      </div>
      <div className="w-full md:w-1/4 p-4">
        <div className=" rounded-lg flex items-center justify-center">
          <GetInTouch />
        </div>
      </div>
      <div className="w-full md:w-1/4 p-4">
          <div className="w-full px-4 footer-info flex flex-col gap-2">
            <Newsletter />
            <SocialIcons />
          </div>
        {/* <div className=" rounded-lg flex items-center justify-center border-2 border-green-400 ">
        </div> */}
      </div>
    </div>
      {/* <div className="mx-auto p-4 lg:p-8">
        <div className="flex flex-wrap justify-between -mx-4">
          <Brands />
          <QuickLinks />
          <GetInTouch />
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4">
            <Newsletter />
            <SocialIcons />
          </div>
        </div>
      </div> */}

        <div className='agile-sometext py-md-5 py-sm-4 py-3'>
          <div className='container'>
            <PaymentMethods />
          </div>
        </div>
      </footer>

      <Copyright />
    </>
  );
}
