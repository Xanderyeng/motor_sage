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

  // export type CarAction =
  // | { type: "carBrand"; payload: MakeListType }
  // | { type: "carsList"; payload: CarType }
  // | { type: 'loading'; payload: boolean }
  // | { type: 'error'; payload: string };