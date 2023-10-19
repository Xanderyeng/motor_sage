"use client"
import { useReducer, useState, useEffect } from "react";
import { fetchCarMakeList, MakeListType } from "../app/api/carList";

import CarBrands from '@/components/CarBrands'
import CarDetail from '@/components/CarDetail'
import BrandListingDropdown from "@/components/BrandListingDropdown";
import Footer from "@/components/Footer";

type CarAction = 
| { type: 'carBrand'; payload: MakeListType };

const initialState = {
  brands: [] as unknown as MakeListType,
}

function carReducer( state: typeof initialState, action: CarAction) {
  switch (action.type) {
    case 'carBrand':
      return { ...state, brands: action.payload};
      default:
        return state;
  }
}


export default function Home() {
  const [{ brands }, dispatch ] = useReducer(carReducer, initialState);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchCarMakeList();
        if (response) {
          // setCarMakes(response);
          dispatch({ type: 'carBrand', payload: response })
        } else {
          setError('Failed to fetch car makes');
        }
      } catch (error) {
        console.error('Error fetching car makes:', error);
        setError('Failed to fetch car makes');
      }
    }
    fetchData();
  }, []);

  console.log(brands);

  return (
    <main>
      <div>
  <div className="header-bot">
    <div className="container">
      <div className="row header-bot_inner_wthreeinfo_header_mid">
        {/* logo */}
        <div className="col-md-3 logo_agile">
          <h1 className="text-center">
            <a href="index.html" className="font-weight-bold font-italic">
              <img src="images/carsymbol5.png" alt=" " className="img-fluid" /> Motor Store
            </a>
          </h1>
        </div>
        {/* //logo */}
        {/* header-bot */}
        <div className="col-md-9 header mt-4 mb-md-0 mb-4">
          <div className="row">
            {/* search */}
            <div className="col-10 agileits_search">
              <form className="form-inline" action="#" method="post">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required />
                <button className="btn my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
            {/* //search */}
            {/* cart details */}
            <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
              <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                <form action="#" method="post" className="last">
                  <input type="hidden" name="cmd" defaultValue="_cart" />
                  <input type="hidden" name="display" defaultValue={1} />
                  <button className="btn w3view-cart" type="submit" name="submit" >
                    <i className="fas fa-cart-arrow-down" />
                  </button>
                </form>
              </div>
            </div>
            {/* //cart details */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* shop locator (popup) */}
  {/* //header-bottom */}
  {/* navigation */}
  <div className="navbar-inner">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* DROPDOWN BRAND SELECTOR */}
      <BrandListingDropdown brands={brands}/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto text-center mr-xl-5">
            <li className="nav-item active mr-lg-2 mb-lg-0 mb-2">
              <a className="nav-link" href="index.html">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            {/* <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Electronics
              </a>
              <div className="dropdown-menu">
                <div className="agile_inner_drop_nav_info p-4">
                  <h5 className="mb-3">Mobiles, Computers</h5>
                  <div className="row">
                    <div className="col-sm-6 multi-gd-img">
                      <ul className="multi-column-dropdown">
                        <li>
                          <a href="product.html">All Mobile Phones</a>
                        </li>
                        <li>
                          <a href="product.html">All Mobile Accessories</a>
                        </li>
                        <li>
                          <a href="product.html">Cases &amp; Covers</a>
                        </li>
                        <li>
                          <a href="product.html">Screen Protectors</a>
                        </li>
                        <li>
                          <a href="product.html">Power Banks</a>
                        </li>
                        <li>
                          <a href="product.html">All Certified Refurbished</a>
                        </li>
                        <li>
                          <a href="product.html">Tablets</a>
                        </li>
                        <li>
                          <a href="product.html">Wearable Devices</a>
                        </li>
                        <li>
                          <a href="product.html">Smart Home</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 multi-gd-img">
                      <ul className="multi-column-dropdown">
                        <li>
                          <a href="product.html">Laptops</a>
                        </li>
                        <li>
                          <a href="product.html">Drives &amp; Storage</a>
                        </li>
                        <li>
                          <a href="product.html">Printers &amp; Ink</a>
                        </li>
                        <li>
                          <a href="product.html">Networking Devices</a>
                        </li>
                        <li>
                          <a href="product.html">Computer Accessories</a>
                        </li>
                        <li>
                          <a href="product.html">Game Zone</a>
                        </li>
                        <li>
                          <a href="product.html">Software</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Appliances
              </a>
              <div className="dropdown-menu">
                <div className="agile_inner_drop_nav_info p-4">
                  <h5 className="mb-3">TV, Appliances, Electronics</h5>
                  <div className="row">
                    <div className="col-sm-6 multi-gd-img">
                      <ul className="multi-column-dropdown">
                        <li>
                          <a href="product2.html">Televisions</a>
                        </li>
                        <li>
                          <a href="product2.html">Home Entertainment Systems</a>
                        </li>
                        <li>
                          <a href="product2.html">Headphones</a>
                        </li>
                        <li>
                          <a href="product2.html">Speakers</a>
                        </li>
                        <li>
                          <a href="product2.html">MP3, Media Players &amp; Accessories</a>
                        </li>
                        <li>
                          <a href="product2.html">Audio &amp; Video Accessories</a>
                        </li>
                        <li>
                          <a href="product2.html">Cameras</a>
                        </li>
                        <li>
                          <a href="product2.html">DSLR Cameras</a>
                        </li>
                        <li>
                          <a href="product2.html">Camera Accessories</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 multi-gd-img">
                      <ul className="multi-column-dropdown">
                        <li>
                          <a href="product2.html">Musical Instruments</a>
                        </li>
                        <li>
                          <a href="product2.html">Gaming Consoles</a>
                        </li>
                        <li>
                          <a href="product2.html">All Electronics</a>
                        </li>
                        <li>
                          <a href="product2.html">Air Conditioners</a>
                        </li>
                        <li>
                          <a href="product2.html">Refrigerators</a>
                        </li>
                        <li>
                          <a href="product2.html">Washing Machines</a>
                        </li>
                        <li>
                          <a href="product2.html">Kitchen &amp; Home Appliances</a>
                        </li>
                        <li>
                          <a href="product2.html">Heating &amp; Cooling Appliances</a>
                        </li>
                        <li>
                          <a href="product2.html">All Appliances</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
              <a className="nav-link" href="about.html">About Us</a>
            </li>
            <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
              <a className="nav-link" href="product.html">New Arrivals</a>
            </li>
            <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pages
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="product.html">Product 1</a>
                <a className="dropdown-item" href="product2.html">Product 2</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="single.html">Single Product 1</a>
                <a className="dropdown-item" href="single2.html">Single Product 2</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="checkout.html">Checkout Page</a>
                <a className="dropdown-item" href="payment.html">Payment Page</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact Us</a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  </div>
  {/* //navigation */}
  {/* banner */}
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    {/* Indicators*/}
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      <li data-target="#carouselExampleIndicators" data-slide-to={3} />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item item1 active">
        <div className="container">
          <div className="w3l-space-banner">
            <div className="carousel-caption p-lg-5 p-sm-4 p-3">
              <p>Get flat
                <span>10%</span> Cashback</p>
              <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">The
                <span>Big</span>
                Sale
              </h3>
              <a className="button2" href="product.html">Shop Now </a>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item item2">
        <div className="container">
          <div className="w3l-space-banner">
            <div className="carousel-caption p-lg-5 p-sm-4 p-3">
              <p>advanced
                <span>Wireless</span> earbuds</p>
              <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">Best
                <span>Headphone</span>
              </h3>
              <a className="button2" href="product.html">Shop Now </a>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item item3">
        <div className="container">
          <div className="w3l-space-banner">
            <div className="carousel-caption p-lg-5 p-sm-4 p-3">
              <p>Get flat
                <span>10%</span> Cashback</p>
              <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">New
                <span>Standard</span>
              </h3>
              <a className="button2" href="product.html">Shop Now </a>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item item4">
        <div className="container">
          <div className="w3l-space-banner">
            <div className="carousel-caption p-lg-5 p-sm-4 p-3">
              <p>Get Now
                <span>40%</span> Discount</p>
              <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">Today
                <span>Discount</span>
              </h3>
              <a className="button2" href="product.html">Shop Now </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
  {/* //banner */}
  {/* top Products */}
  <section className="container py-xl-4 py-lg-2 mt-sm-5 py-4 border-2 border-blue">
              <CarBrands brands={brands} />
    </section>
  <div className="ads-grid py-sm-5 py-4">
    <div className="container py-xl-4 py-lg-2">
      {/* tittle heading */}
      {/* <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
        <span>O</span>ur
        <span>N</span>ew
        <span> C</span>ar
        <span> B</span>rands</h3> */}
      {/* //tittle heading */}
      <div className="row">
        {/* product left */}
        <div className="agileinfo-ads-display col-lg-9">
          <div className="wrapper">
            {/* first section */}
            <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
              <h3 className="heading-tittle text-center font-italic">New Brand Mobiles</h3>
              <div className="row">
                {/* ----------- CAR LISTING ---------- */}
             <CarDetail brands={brands} />
             {/* <CarDetail />
             <CarDetail /> */}


              </div>
            </div>
            {/* //first section */}
            {/* second section */}
         
            {/* //second section */}
            {/* third section */}
            <div className="product-sec1 product-sec2 px-sm-5 px-3">
              <div className="row">
                <h3 className="col-md-4 effect-bg">Summer Carnival</h3>
                <p className="w3l-nut-middle">Get Extra 10% Off</p>
                <div className="col-md-8 bg-right-nut">
                  <img src="images/image1.png" alt="" />
                </div>
              </div>
            </div>
            {/* //third section */}
            {/* fourth section */}
            <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
              <h3 className="heading-tittle text-center font-italic">Large Appliances</h3>
              <div className="row">
                <div className="col-md-4 product-men mt-5">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item text-center">
                      <img src="images/m7.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <a href="single.html" className="link-product-add-cart">Quick View</a>
                        </div>
                      </div>
                    </div>
                    <span className="product-new-top">New</span>
                    <div className="item-info-product text-center border-top mt-4">
                      <h4 className="pt-1">
                        <a href="single.html">Whirlpool 245</a>
                      </h4>
                      <div className="info-product-price my-2">
                        <span className="item_price">$230.00</span>
                        <del>$280.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" defaultValue="_cart" />
                            <input type="hidden" name="add" defaultValue={1} />
                            <input type="hidden" name="business" defaultValue=" " />
                            <input type="hidden" name="item_name" defaultValue="Whirlpool 245" />
                            <input type="hidden" name="amount" defaultValue={230.00} />
                            <input type="hidden" name="discount_amount" defaultValue={1.00} />
                            <input type="hidden" name="currency_code" defaultValue="USD" />
                            <input type="hidden" name="return" defaultValue=" " />
                            <input type="hidden" name="cancel_return" defaultValue=" " />
                            <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men mt-5">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item text-center">
                      <img src="images/m8.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <a href="single.html" className="link-product-add-cart">Quick View</a>
                        </div>
                      </div>
                    </div>
                    <div className="item-info-product text-center border-top mt-4">
                      <h4 className="pt-1">
                        <a href="single.html">BPL Washing Machine</a>
                      </h4>
                      <div className="info-product-price my-2">
                        <span className="item_price">$180.00</span>
                        <del>$200.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" defaultValue="_cart" />
                            <input type="hidden" name="add" defaultValue={1} />
                            <input type="hidden" name="business" defaultValue=" " />
                            <input type="hidden" name="item_name" defaultValue="BPL Washing Machine" />
                            <input type="hidden" name="amount" defaultValue={180.00} />
                            <input type="hidden" name="discount_amount" defaultValue={1.00} />
                            <input type="hidden" name="currency_code" defaultValue="USD" />
                            <input type="hidden" name="return" defaultValue=" " />
                            <input type="hidden" name="cancel_return" defaultValue=" " />
                            <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 product-men mt-5">
                  <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item text-center">
                      <img src="images/m9.jpg" alt="" />
                      <div className="men-cart-pro">
                        <div className="inner-men-cart-pro">
                          <a href="single.html" className="link-product-add-cart">Quick View</a>
                        </div>
                      </div>
                    </div>
                    <div className="item-info-product text-center border-top mt-4">
                      <h4 className="pt-1">
                        <a href="single.html">Microwave Oven</a>
                      </h4>
                      <div className="info-product-price my-2">
                        <span className="item_price">$199.00</span>
                        <del>$299.00</del>
                      </div>
                      <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                        <form action="#" method="post">
                          <fieldset>
                            <input type="hidden" name="cmd" defaultValue="_cart" />
                            <input type="hidden" name="add" defaultValue={1} />
                            <input type="hidden" name="business" defaultValue=" " />
                            <input type="hidden" name="item_name" defaultValue="Microwave Oven" />
                            <input type="hidden" name="amount" defaultValue={199.00} />
                            <input type="hidden" name="discount_amount" defaultValue={1.00} />
                            <input type="hidden" name="currency_code" defaultValue="USD" />
                            <input type="hidden" name="return" defaultValue=" " />
                            <input type="hidden" name="cancel_return" defaultValue=" " />
                            <input type="submit" name="submit" defaultValue="Add to cart" className="button btn" />
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //fourth section */}
          </div>
        </div>
        {/* //product left */}
        {/* product right */}
        <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
          <div className="side-bar p-sm-4 p-3">
            <div className="search-hotel border-bottom py-2">
              <h3 className="agileits-sear-head mb-3">Search Here..</h3>
              <form action="#" method="post">
                <input type="search" placeholder="Product name..." name="search" required />
                <input type="submit" defaultValue=" " />
              </form>
            </div>
            {/* price */}
            <div className="range border-bottom py-2">
              <h3 className="agileits-sear-head mb-3">Price</h3>
              <div className="w3l-range">
                <ul>
                  <li>
                    <a href="#">Under $1,000</a>
                  </li>
                  <li className="my-1">
                    <a href="#">$1,000 - $5,000</a>
                  </li>
                  <li>
                    <a href="#">$5,000 - $10,000</a>
                  </li>
                  <li className="my-1">
                    <a href="#">$10,000 - $20,000</a>
                  </li>
                  <li>
                    <a href="#">$20,000 $30,000</a>
                  </li>
                  <li className="mt-1">
                    <a href="#">Over $30,000</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* //price */}
            {/* discounts */}
          
            {/* //discounts */}
            {/* reviews */}
           
            {/* //reviews */}
            {/* electronics */}
          
            {/* //electronics */}
            {/* delivery */}
            <div className="left-side border-bottom py-2">
              <h3 className="agileits-sear-head mb-3">Cash On Delivery</h3>
              <ul>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">Eligible for Cash On Delivery</span>
                </li>
              </ul>
            </div>
            {/* //delivery */}
            {/* arrivals */}
            <div className="left-side border-bottom py-2">
              <h3 className="agileits-sear-head mb-3">New Arrivals</h3>
              <ul>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">Last 30 days</span>
                </li>
                <li>
                  <input type="checkbox" className="checked" />
                  <span className="span">Last 90 days</span>
                </li>
              </ul>
            </div>
            {/* //arrivals */}
            {/* best seller */}
            <div className="f-grid py-2">
              <h3 className="agileits-sear-head mb-3">Best Seller</h3>
              <div className="box-scroll">
                <div className="scroll">
                  <div className="row">
                    <div className="col-lg-3 col-sm-2 col-3 left-mar">
                      <img src="images/k1.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                      <a href="#">Samsung Galaxy On7 Prime (Gold, 4GB RAM + 64GB Memory)</a>
                      <a href="#" className="price-mar mt-2">$12,990.00</a>
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-lg-3 col-sm-2 col-3 left-mar">
                      <img src="images/k2.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                      <a href="#">Haier 195 L 4 Star Direct-Cool Single Door Refrigerator</a>
                      <a href="#" className="price-mar mt-2">$12,499.00</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-sm-2 col-3 left-mar">
                      <img src="images/k3.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                      <a href="#">Ambrane 13000 mAh Power Bank (P-1310 Premium)</a>
                      <a href="#" className="price-mar mt-2">$1,199.00 </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //best seller */}
          </div>
          {/* //product right */}
        </div>
      </div>
    </div>
  </div>
  {/* //top products */}
  {/* middle section */}
  <div className="join-w3l1 py-sm-5 py-4">
    <div className="container py-xl-4 py-lg-2">
      <div className="row">
        <div className="col-lg-6">
          <div className="join-agile text-left p-4">
            <div className="row">
              <div className="col-sm-7 offer-name">
                <h6>Smooth, Rich &amp; Loud Audio</h6>
                <h4 className="mt-2 mb-3">Branded Headphones</h4>
                <p>Sale up to 25% off all in store</p>
              </div>
              <div className="col-sm-5 offerimg-w3l">
                <img src="images/off1.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-lg-0 mt-5">
          <div className="join-agile text-left p-4">
            <div className="row ">
              <div className="col-sm-7 offer-name">
                <h6>A Bigger Phone</h6>
                <h4 className="mt-2 mb-3">Smart Phones 5</h4>
                <p>Free shipping order over $100</p>
              </div>
              <div className="col-sm-5 offerimg-w3l">
                <img src="images/off2.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* middle section */}
</div>
{/* ---- FOOTER SECTION --- */}
        <Footer/>
{/* ---- FOOTER SECTION END --- */}

      </main>
  )
}
