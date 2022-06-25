# Welcome to this flight-api-application
This application has many features which i willl guide you through all of them

**Feature 1:**
Add/Book Flight --- 
The image below contains a booked flight. This was obtained by sending a POST request with a json construction of the flight details
to the api with the **book-flight** route.
![book-flight](https://user-images.githubusercontent.com/78439079/175207681-5aae4b75-e42e-4c6a-ad7c-7394f518c047.png)

**Feature 2:**
Get all Flight --- 
The image below contains all the flights booked which are just two in number. This was obtained by sending a GET request to the api with the **my-flights** route.
![get all flights](https://user-images.githubusercontent.com/78439079/175207903-1b14f6e2-c6ec-428c-9942-5c9db8e0e812.png)


**Feature 3:**
Get a single Flight --- 
The image below contains a single flight which was retrieved from the api. This was obtained by sending a GET request to the api with the **get-flight/id** route.
![get single flight 1](https://user-images.githubusercontent.com/78439079/175208258-89ff45e0-63ff-48b9-8bce-0e44b4ef714b.png)
The image below also contains another single flight which was retrieved from the api. This was obtained by 
sending a GET request to the api with the **get-flight/another id** route.
![get single flight 2](https://user-images.githubusercontent.com/78439079/175208269-52f9a457-6610-46e3-a062-4877a9334ba1.png)


**Feature 4:**
Update/Edit Flight --- 
The image below contains an updated flight, If you inspect closely you will find out that the destination has changed from Lagos to America. Obtained by sending a POST 
request to **/update-flight/id**
![update flight 1](https://user-images.githubusercontent.com/78439079/175208652-ced62b7b-d453-4a25-8cf0-6f0fa42690f8.png)
The image below also contains another updated flight, If you inspect closely you will find out that the destination has changed from Abuja to Canada. Was also 
Obtained by sending a POST request to **/update-flight/another id**
![update flight 2](https://user-images.githubusercontent.com/78439079/175208661-49cdf763-92d2-499b-ada2-c2f9453be38a.png)


**Feature 5:**
Delete Flight --- 
The image below contains the list of flights without the deleted one, recall we had two before, now its one. 
This was obtained by sending a DELETE request to the api with the **delete-flight/id** route.
![delete flight 1](https://user-images.githubusercontent.com/78439079/175209539-3a711970-e0a7-46d4-9d30-79f5200cc27f.png)
The image below contains an empty list of flights, because the last one has been deleted also...
![delete flight 2](https://user-images.githubusercontent.com/78439079/175209597-9d3137c5-1cf8-4a10-9304-5c491554ab0f.png)


**Feature 6:**
Homepage --- 
The image below contains json response with some instructions that will help a new client get started.
![homepage](https://user-images.githubusercontent.com/78439079/175210031-226b6a33-d8b9-4bfc-a642-89796db8bc22.png)
