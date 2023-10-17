Task
Using the design specified below, build a web app using reactjs with typescript that consumes the apis specified below. Understand that instead of the electronics theme, the new theme will be cars.
Design: https://w3layouts.com/template/electro-store-an-ecommerce-theme-bootstrap-template/
APIs:
•	Get all popular makes: https://api.staging.myautochek.com/v1/inventory/make?popular=true
This will be in place of where the show brands are listed
•	List all cars: https://api.staging.myautochek.com/v1/inventory/car/search Note that this is a paginated list.
•	List car detail page: https://api.staging.myautochek.com/v1/inventory/car/{carId} Bonus point if you can make use of as many fields as possible, use intuition to determine how the data will be rendered.
•	Get Car media: https://api.staging.myautochek.com/v1/inventory/car_media?carId={carId}  Pls note that some car media might be of type video, your app must play such video as well, example of a vehicle with video media is https://api.staging.myautochek.com/v1/inventory/car_media?carId=R1nVTV4Mj
Deliverables
•	Develop a server-side rendered react application using Nextjs with typescript
•	Share link to the Github repository.
Deploy on Heroku and share URL
