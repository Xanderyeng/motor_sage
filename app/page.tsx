"use client";
import React, { useReducer, useState, useEffect } from "react";
import { fetchCarMakeList } from "./api/carMakeListFetch";
import { MakeListType } from "@/types/Types";
// import { CarAction } from "@/types/Types";

import CarBrands from "@/components/CarBrands";
// import CarDetail from "@/components/CarListing";
import Footer from "@/components/Footer";
import BannerCarousel from "@/features/BannerCarousel";
import MiddleAdvertBanner from "@/features/MiddleAdvertBanner";
import Offers from "@/features/Offers";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/header/NavBar";
import Logo from "@/components/header/Logo";
import SearchBar from "@/components/header/SearchBar";
import CarListing from "@/components/CarListing";
import { CarType } from "@/types/Types";

export type CarAction =
  | { type: "carBrand"; payload: MakeListType }
  | { type: "carsList"; payload: CarType }
  | { type: "loading"; payload: boolean }
  | { type: "error"; payload: string };

const initialState = {
  brands: [] as unknown as MakeListType,
  cars: [] as unknown as CarType,
  isLoading: false,
  error: "",
};

function carReducer(state: typeof initialState, action: CarAction) {
  switch (action.type) {
    case "carBrand":
      return { ...state, brands: action.payload };
    case "carsList":
      return { ...state, cars: action.payload };
    case "loading":
      return { ...state, isLoading: action.payload };
    case "error":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default function Home() {
  const [{ brands, cars, isLoading, error }, dispatch] = useReducer(
    carReducer,
    initialState
  );
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchCarMakeList();
        if (response) {
          // setCarMakes(response);
          dispatch({ type: "carBrand", payload: response });
        } else {
          // setError("Failed to fetch car makes");
          dispatch({
            type: "error",
            payload: "Failed to Fetch list of Car Makes",
          });
        }
      } catch (error) {
        console.error("Error fetching car makes:", error);
        // setError("Failed to fetch car makes");
        dispatch({
          type: "error",
          payload: "Failed to Fetch list of Car Makes",
        });
      }
    }
    fetchData();
  }, []);

  console.log(brands);

  return (
    <main>
      <div>
        <div className='header-bot'>
          <div className='container'>
            <div className='row header-bot_inner_wthreeinfo_header_mid'>
              {/* logo */}
              <Logo />
              {/* header-bot */}
              <SearchBar />
            </div>
          </div>
        </div>
        {/* shop locator (popup) */}
        {/* //header-bottom */}
        {/* navigation */}
        <NavBar brands={brands} />
        {/* banner */}
        <BannerCarousel />
        {/* top Products */}
        <section className='container  py-xl-4 py-lg-2 mt-sm-5 py-4 border-2 border-blue'>
          <CarBrands brands={brands} />
        </section>
        <div className='ads-grid py-sm-5 py-4'>
          <div className='container md:mx-custom-1366 py-xl-4 py-lg-2'>
            {/* //tittle heading */}
            <div className='row'>
              {/* product left */}
              <div className='agileinfo-ads-display col-lg-9'>
                <div className='wrapper'>
                  {/* first section */}
                  <div className=' px-sm-4 px-3 py-sm-5 py-0 mb-4'>
                    {/* <h3 className='heading-tittle text-center font-italic'>
                      New Brand Mobiles
                    </h3> */}
                    <div className='row'>
                      {/* ----------- CAR LISTING ---------- */}
                      <CarListing
                        // cars={cars}
                        // dispatch={dispatch}
                        // isLoading={isLoading}
                        // error={error}
                      />
                      {/* <CarDetail brands={brands} /> */}
                      {/* <CarDetail />
             <CarDetail /> */}
                    </div>
                  </div>
                  {/* second section */}
                  {/* third section */}
                  <Offers />
                  {/* fourth section */}
                </div>
              </div>

              <SideBar />
            </div>
          </div>
        </div>
        {/* //top products */}
        {/* middle section */}
        <MiddleAdvertBanner />
      </div>
      {/* ---- FOOTER SECTION --- */}
      <Footer />
    </main>
  );
}
