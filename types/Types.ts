export interface CarType {
    id: string;
    title: string;
    imageUrl: string;
    year: number;
    city: string;
    state: string;
    gradeScore: number;
    sellingCondition: string;
    hasWarranty: boolean;
    marketplacePrice: number;
    websiteUrl: string;
  };
  
  export type CarsType = CarType[];

  export type MakeListType = {

    makeList: {
      id: React.Key | null | undefined;
      imageUrl: string | undefined;
      name: string;
    }[];
    pagination: {
      total: number;
      currentPage: number;
      pageSize: number;
    };
}

export interface CarDetailsType {
  carName: string;
  marketplacePrice: number;
  imageUrl: string;
  year: number;
  mileage: number;
  model: {
    name: string;
  };
  state: string;
  ownerType: string;
  transmission: string;
  fuelType: string;
  sellingCondition: string;
  interiorColor: string;
  exteriorColor: string;
  engineType: string;
  gradeScore: number;
  installment: number;
  loanValue: number;
  hasFinancing: boolean;
  inspectorDetails: {
    inspectorFullName: string;
    workshopName: string;
    totalInspection: number;
  };
}

export type CarDetailsState = CarDetailsType[];

export interface CarImage {
  id: number; 
  name: string;
  url: string;
  createdAt: string; 
  type: "image/jpeg" | "video/mp4";
  videoUrl?: string;
}

export type CarImagesState = CarImage[]

// <div className='relative max-w-md'>
  // <Carousel showThumbs={true}>
  //   {carImages?.map((media) => (
  //     <div key={media.id}>
  //       {media.type === "image/jpeg" ? (
  //         <img src={media.url} alt={media.name} />
  //       ) : (
  //         <ReactPlayer
  //           url={media.url}
  //           controls
  //           width="100%"
  //           height="100%"
  //         />
  //       )}
  //     </div>
  //   ))}
  // </Carousel>
// </div>

