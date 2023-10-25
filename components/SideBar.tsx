import NewArrivals from "@/features/NewArrivals";
import PriceFilter from "@/features/PriceFilter";
import SearchForBrand from "@/features/SearchForBrand";

export default function SideBar() {
  return (
    <>
      <div className='bg-gray-50 rounded-lg shadow-lg p-4 '>
        <div className='side-bar p-sm-4 p-3'>
          <SearchForBrand />
          <PriceFilter />
          <NewArrivals />
        </div>
      </div>
    </>
  );
}
