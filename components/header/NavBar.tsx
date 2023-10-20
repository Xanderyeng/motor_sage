import BrandListingDropdown from "../BrandListingDropdown";
import { MakeListType } from "@/app/api/carMakeListFetch";

interface CarBrandsProps {
  brands: MakeListType;
}
export default function NavBar({ brands }: CarBrandsProps) {
  return (
    <>
      <div className='navbar-inner'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            {/* DROPDOWN BRAND SELECTOR */}
            <BrandListingDropdown brands={brands} />
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ml-auto text-center mr-xl-5'>
                <li className='nav-item active mr-lg-2 mb-lg-0 mb-2'>
                  <a className='nav-link' href='index.html'>
                    Home
                    <span className='sr-only'>(current)</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
