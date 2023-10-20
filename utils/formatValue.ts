// This Utility function will formart the Prices to a clean formart
export const formatValue = (value: number | bigint, unit: string = '', currency: string = 'USD'): string => {
    if (unit) {
      return `${value} ${unit}`;
    } else {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        minimumFractionDigits: 0,
      }).format(value);
    }
  };


  // async function fetchCarImages({ params }: { params: { id: string } }) {
  //   const url = `${apiUrlMedia}${params.id}`;
  //   console.log(url);
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`Failed to fetch car images. Status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     return data.carMediaList; // Access the 'carMediaList' property
  //   } catch (error) {
  //     console.error("Error fetching car images:", error);
  //     return null;
  //   }
  // }