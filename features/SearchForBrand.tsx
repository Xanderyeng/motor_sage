export default function SearchForBrand() {
  return (
    <>
      <div className='search-hotel border-bottom py-2'>
        <h3 className='agileits-sear-head mb-3'>Search Here..</h3>
        <form action='#' method='post'>
          <input
            type='search'
            placeholder='Car brand ...'
            name='search'
            required
          />
          <input type='submit' defaultValue=' ' />
        </form>
      </div>
    </>
  );
}
