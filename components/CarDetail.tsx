"use client";
import React, { useState, useEffect } from "react";
import { MakeListType } from '@/app/api/carList';

interface CarBrandsProps {
    brands: MakeListType; // Use the updated type
  }

export default function CarDetail({ brands }: CarBrandsProps) {
  // const [carMakes, setCarMakes] = useState<MakeListType | null>(null);
  // const [error, setError] = useState<string | null>(null);


  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetchCarMakeList();
  //       if (response) {
  //         // setCarMakes(response);
  //         dispatch({ type: 'brands', payload: response })
  //       } else {
  //         setError('Failed to fetch car makes');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching car makes:', error);
  //       setError('Failed to fetch car makes');
  //     }
  //   }
  //   fetchData();
  // }, []);

  // console.log(brands);

  return (
    <>
    { brands && brands.makeList?.length > 0 ? (
          brands.makeList.map((carMake: { id: React.Key | null | undefined; imageUrl: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined; }) => (
    <div className='col-md-4 product-men mt-5'>
            <div key={carMake.id} className="men-pro-item simpleCart_shelfItem">
              <div className="men-thumb-item text-center">
                <img src={carMake.imageUrl}  />
                <div className="men-cart-pro">
                  <div className="inner-men-cart-pro">
                    <a href="single.html" className="link-product-add-cart">
                      Quick View
                    </a>
                  </div>
                </div>
              </div>
              <div className="item-info-product text-center border-top mt-4">
                <h4 className="pt-1">{carMake.name}</h4>
              </div>
            </div>
      </div>
          ))
        ) : (
          <p>Loading car makes...</p>
        )}
    </>
    );
}