export default function NewArrivals() {
  return (
    <>
      <div className='left-side border-bottom py-2'>
        <h3 className='agileits-sear-head mb-3'>New Arrivals</h3>
        <ul>
          <li>
            <input type='checkbox' className='checked' />
            <span className='span'>Last 30 days</span>
          </li>
          <li>
            <input type='checkbox' className='checked' />
            <span className='span'>Last 90 days</span>
          </li>
        </ul>
      </div>
    </>
  );
}
