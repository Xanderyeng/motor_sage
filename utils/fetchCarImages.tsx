const apiUrlMedia = `https://api-prod.autochek.africa/v1/inventory/car_media?carId=`;

export async function fetchCarImages({ params }: { params: { id: string } }) {
    const url = `${apiUrlMedia}${params.id}`;
    console.log(url)
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch car images. Status: ${response.status}`);
      }
      const data = await response.json();
      return data.carMediaList;
    } catch (error) {
      console.error("Error fetching car images:", error);
      return null;
    }
  }