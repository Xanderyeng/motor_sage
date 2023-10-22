export default function SearchBar() {
  return (
    <>
      <div className=' flex-grow py-4 mb-md-0 border-0 border-blue-500'>
        <div className='row'>
          {/* search */}
          <div className=''>
            <form
              className=' flex gap-4'
              action='#'
              method='post'
            >
              <input
                className=' flex-grow py-2 px-6 rounded-[0.5rem] border-1 border-gray-400 shadow-md mr-sm-2'
                type='search'
                placeholder='Search for a car...'
                aria-label='Search'
                required
              />
              <button
                className=' flex-shrink bg-btn rounded-md text-white p-2 w-[20%]'
                type='submit'
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
