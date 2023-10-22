import { MakeListType } from "@/types/Types";

interface CarBrandsProps {
  brands: MakeListType;
}

export default function BrandListingDropdown({ brands }: CarBrandsProps) {
  const brandOptions = brands.makeList?.map((brand) => (
    <option key={brand.id} value={brand.name}>
      {brand.name}
    </option>
  ));

  return (
    <>
      <div className='bg-gray-100'>
        <form action='#' method='post' className='bg-gray-100'>
          <select id='agileinfo-nav_search' name='agileinfo_search'
          className=" text-black text-md p-2 w-full leading-5 cursor-pointer outline outline-2 outline-gray-600"
          required >
            <option className="text-md font-Inter font-medium">All Brands</option>
            {brandOptions}
          </select>
        </form>
      </div>
    </>
  );
}
