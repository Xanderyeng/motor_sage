import BrandListingDropdown from "../BrandListingDropdown";
import { MakeListType } from "@/types/Types";
interface CarBrandsProps {
  brands: MakeListType;
}
export default function NavBar({ brands }: CarBrandsProps) {
  return (
    <>
      <div className=' w-full bg-gray-100 shadow py-2'>
        <div className='container'>
          <div className='w-2/12 rounded-md overflow-hidden'>
            <BrandListingDropdown brands={brands} />
          </div>
        </div>
      </div>
    </>
  );
}
