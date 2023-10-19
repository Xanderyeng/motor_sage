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

// export type MakeListType = {
//     makeList: []; 
//     error: string | null;
//   };

export async function fetchCarMakeList() {
    // const url = `https://api.staging.myautochek.com/v1/inventory/make?popular=true`;

    try {
        const response = await fetch(`https://api.staging.myautochek.com/v1/inventory/make?popular=true`);
        if (!response.ok) {
          throw new Error(`Failed to fetch car makes. Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching car makes:', error);
        return null; // Return null on error
      }
}