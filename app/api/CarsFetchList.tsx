
const apiUrl = "https://api-prod.autochek.africa/v1/inventory/car/search";

export async function fetchCarListingData(currentPage: number, pageSize: number) {
  const url = `${apiUrl}?page_number=${currentPage}`;
  // &page_size=${pageSize}

  console.log(`current page: ${currentPage}`);
  console.log(`Page Size: ${pageSize}`);
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch car listing data. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching car listing data:", error);
    return null;
  }
}
