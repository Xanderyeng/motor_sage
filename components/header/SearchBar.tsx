export default function SearchBar() {
  return (
    <>
        <div className='col-md-9 header mt-4 mb-md-0 mb-4'>
                <div className='row'>
                  {/* search */}
                  <div className='col-10 agileits_search'>
                    <form className='form-inline' action='#' method='post'>
                      <input
                        className='form-control mr-sm-2'
                        type='search'
                        placeholder='Search'
                        aria-label='Search'
                        required
                      />
                      <button className='btn my-2 my-sm-0' type='submit'>
                        Search
                      </button>
                    </form>
                  </div>
                  {/* //search */}
                  {/* cart details */}
                  <div className='col-2 top_nav_right text-center mt-sm-0 mt-2'>
                    <div className='wthreecartaits wthreecartaits2 cart cart box_1'>
                      <form action='#' method='post' className='last'>
                        <input type='hidden' name='cmd' defaultValue='_cart' />
                        <input type='hidden' name='display' defaultValue={1} />
                        <button
                          className='btn w3view-cart'
                          type='submit'
                          name='submit'
                        >
                          <i className='fas fa-cart-arrow-down' />
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* //cart details */}
                </div>
              </div>   
        </>
  )
}
