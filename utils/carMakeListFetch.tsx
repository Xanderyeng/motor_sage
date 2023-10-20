
const url = `https://api.staging.myautochek.com/v1/inventory/make?popular=true`;
export async function fetchCarMakeList() {

    try {
        const response = await fetch(`${url}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch car makes. Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching car makes:', error);
        return null; 
      }
}