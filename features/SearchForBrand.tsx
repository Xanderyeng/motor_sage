import { FiSearch } from "react-icons/fi";
export default function SearchForBrand() {
  return (
    <>
      <div className='search-hotel border-bottom py-2'>
        <h3 className='mb-3'>Search Here</h3>
        <form action='#' method='post'>
          <input
            type='search'
            placeholder='Car type or brand ...'
            name='search'
            className="bg-white p-2 rounded-md"
            required
          />
          <button type='submit' className=' bg-transparent border-none pl-2 text-2xl'>
            <FiSearch />
          </button>
        </form>
      </div>
    </>
  );
}
