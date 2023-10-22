import Image from "next/image";
import test_img from "public/images/test_img.svg";
import { MakeListType } from "@/types/Types";

interface CarBrandsProps {
  brands: MakeListType; 
}

export default function CarBrands({ brands }: CarBrandsProps) {
  return (
    <>
      <h3 className=' text-4xl font-semibold font-inter drop-shadow-headingTextShadow text-center mb-lg-5 mb-sm-4 pb-4'>
        <span className="letterStyle">P</span>opular
        <span className="letterStyle"> B</span>rands
      </h3>
      <div className='flex flex-row flex-wrap gap-6 justify-between'>
        {brands && brands.makeList?.length > 0 ? (
          brands.makeList.map(
            (brand: {
              id: React.Key | null | undefined;
              imageUrl: string | undefined;
              name:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.PromiseLikeOfReactNode
                | null
                | undefined;
            }) => (
              <Image
                key={brand.id}
                src={brand.imageUrl ?? `${test_img}`}
                alt=''
                className='relative'
                width={60}
                height={60}
                loading='lazy'
                style={{ objectFit: "contain" }}
              />
            )
          )
        ) : (
          <p>Loading Car Brands...</p>
        )}
      </div>
    </>
  );
}
