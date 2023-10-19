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
        <div className='w3l-middlefooter-sec'>
          <div className='container py-md-5 py-sm-4 py-3'>
            <div className='row footer-info w3-agileits-info'>
              {/* <!-- footer categories --> */}
              <Brands />

              <QuickLinks />

              <GetInTouch />
              <div className='col-md-3 col-sm-6 footer-grids w3l-agileits mt-md-0 mt-4'>
                <Newsletter />

                <SocialIcons />
              </div>
            </div>
          </div>
        </div>

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
