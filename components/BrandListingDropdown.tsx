import React from 'react'
import { MakeListType } from '@/app/api/carList';

interface CarBrandsProps {
    brands: MakeListType; // Use the updated type
  }

export default function BrandListingDropdown({ brands}: CarBrandsProps ) {
    const brandOptions = brands.makeList?.map((brand) => (
        <option key={brand.id} value={brand.name}>
          {brand.name}
        </option>
      ));
  return (
    <>
         <div className="agileits-navi_search">
          <form action="#" method="post">
            <select id="agileinfo-nav_search" name="agileinfo_search" className="border" required>
            <option>All Brands</option>
          {brandOptions}
        </select>
          </form>
        </div>
    </>
  )
}
