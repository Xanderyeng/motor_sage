const apiUrl = `https://api-prod.autochek.africa/v1/inventory/car/`;

export async function fetchCarDetails({ params }: { params: { id: string } }) {
    const url = `${apiUrl}${params.id}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch car Details. Status: ${response.status}`
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching car details:", error);
      return null;
    }
  }