import BestSeller from "@/features/BestSeller";
import NewArrivals from "@/features/NewArrivals";
import PriceFilter from "@/features/PriceFilter";
import SearchForBrand from "@/features/SearchForBrand";

export default function SideBar() {
  return (
    <>
     <div className='col-lg-2 mt-lg-0 mt-4 p-lg-0'>
                <div className='side-bar p-sm-4 p-3'>
                <SearchForBrand />
                  {/* price */}
                 <PriceFilter />
                  {/* //arrivals */}
                  <NewArrivals />
                  {/* best seller */}
                 <BestSeller />
                  {/* //best seller */}
                </div>
                {/* //product right */}
              </div>
    </>
  )
}
