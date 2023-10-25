"use client";
import React, { useReducer, useEffect } from "react";
import { fetchCarMakeList } from "@utils/carMakeListFetch";
import { MakeListType } from "@/types/Types";
import CarBrands from "@/components/CarBrands";
import Footer from "@/components/Footer";
import MiddleAdvertBanner from "@/features/MiddleAdvertBanner";
import Offers from "@/features/Offers";
import SideBar from "@/components/SideBar";
import CarListing from "@/components/CarListing";
import { CarType } from "@/types/Types";
import PopularCars from "@/components/PopularCars";
import BannerSlider from "@/features/BannerSlider";
import Header from "@/components/header/Header";

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
  currentPage: 1,
  pageSize: 10,
  totalPages: 1,
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

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchCarMakeList();
        if (response) {
          dispatch({ type: "carBrand", payload: response });
        } else {
          dispatch({
            type: "error",
            payload: "Failed to Fetch list of Car Makes",
          });
        }
      } catch (error) {
        console.error("Error fetching car makes:", error);
        dispatch({
          type: "error",
          payload: "Failed to Fetch list of Car Makes",
        });
      }
    }
    fetchData();
  }, []);

  return (
    <main>
     <div className="bg-white overflow-hidden">
        <div className="w-screen mx-auto">
          <div className="flex flex-row flex-wrap border-0 border-blue-500  justify-center pb-2">
           <Header brands={brands} />
          </div>
        </div>
      </div>
      <BannerSlider />
      <section className="container py-8">
        <CarBrands brands={brands} />
      </section>
      <div className="bg-gray-50">
        <div className=" md:max-w-6xl lg:max-w-7xl mx-auto py-16">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-9/12 rounded-lg shadow-lg p-4">
              <div className="mb-4 ">
                  <PopularCars />
              </div>
              <div className="flex flex-col justify-center">
                <CarListing isLoading={isLoading} dispatch={dispatch} />
              </div>
            </div>
            <SideBar />
          </div>
        </div>
      <MiddleAdvertBanner />
      </div>
          <Offers />
      <Footer />
    </main>
  );
}
