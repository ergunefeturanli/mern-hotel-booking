#Hotel Booking Project Using MERN Stack
___________________________________________________________________________________________________________________________________________________________________________________
Prerequisites
*This project consist two project, client(frontend) and api(backend)
*First of all you need to go both project and install npm packages with "npm install"
*This project contain 2 enviorement, MONGO_URL and JWT_SECRET. There is a .env.example file for example. You need to create a .env file and insert enviorements into it.
___________________________________________________________________________________________________________________________________________________________________________________
Installation
*To start the backend side of this project you need to go "/api" folder from terminal and type "npm start dev", this is recommended as first step.
*To start the frontend side of this project you need to go "/client" folder from terminal and type "npm start", this side is created with create-react-app.
___________________________________________________________________________________________________________________________________________________________________________________
Routes
This application uses 3 different route with express
___________________________________________________________________________________________________________________________________________________________________________________
* "/api/hotel" endpoint with 2 request
- GET "/api/hotel" --> It brings you the hotels with seach criterias
- POST "/api/hotel" --> It adds a new hotel to DB. It takes { name*, isAvaible*(default=true) } json data as argument. This can not be used at the browser side.
    * is required for request body 

* "/api/reservation" endpoint with 2 request
- GET "/api/reservation" --> It brings you the reservations with using hotelUtils search filter. In browser side you need to login as admin to see it but it lacks authentication process from backend with jwt.
- POST ""/api/reservation"" --> It creates a new reservation data. It takes { name, surname, phone, email, guessCount, checkInDate, checkOutDate, reservationNumber(not required), hotel } json data as argument. This can be used at front end side from "/makeres" page with a form.
    * is required for request body 

* "/api/user" endpoint with 3 request
- POST "/api/user/register" It takes the { username*, password*, isAdmin(default=true), tokens(middleware jwt) } json data as arguments and creates new admin user for login, without login reservations can not be seen from browser. It generates you a new jwt token. This is made by custom Mongoose.methods.generateAuthToken 
- POST "/api/user/login" It takes the { username, password } json data as arguments and generates an additional jwt token. Login auth is powered by static method in Mongoose.Schema. It can be used at "/showres" page for browser.
- POST "/api/user/logoutAll" It clears the tokens array from user. It uses middleware. To use this "Authorization" "key" must be added to request header with a token "value", from any token data from users.tokens array
    * is required for request body 
_________________________________________________________________________________________________________________________________________________________________________________
EXAMPLE POSTMAN COLLECTION
https://www.postman.com/collections/fa7e4a6f0caaa1c4fca8
_________________________________________________________________________________________________________________________________________________________________________________
*Need to be added
*Creating Random Reservation Number
*Admin Approve and Reject utility
*Backend Login authorization with JWT
*Not logging out with hardcode JWT
*Register as normal user
*Fetching only available hotel, it needs to be added to hotelsUtils
*Date information validations (checkInDate < checkOutDate)
*Showing Less Detailed Date Information
*Style and etc.



