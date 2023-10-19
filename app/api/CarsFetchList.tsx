// Car Listing API Endpoint
const apiUrl = "https://api.staging.myautochek.com/v1/inventory/car/search";

export async function fetchListofCars() {

try {
    const res = await fetch(`${apiUrl}`);
    if (!res.ok) {
        throw new Error(`Failed to Fetch all the Cars. Status: ${res.status}`);
    }
    const carsList = await res.json();
    return carsList;
} catch (error) {
    console.error("Error fetching car list:", error);
    return null;
}
// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     setCars(data.result); // Assuming your cars are inside the 'result' property
//     setLoading(false);
//   })
//   .catch((error) => {
//     console.error("Error fetching car list:", error);
//     setLoading(false);
//   });
}

// useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetchCarMakeList();
//         if (response) {
//           // setCarMakes(response);
//           dispatch({ type: "carBrand", payload: response });
//         } else {
//           setError("Failed to fetch car makes");
//         }
//       } catch (error) {
//         console.error("Error fetching car makes:", error);
//         setError("Failed to fetch car makes");
//       }
//     }
//     fetchData();
//   }, []);