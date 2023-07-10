# Challenge-22-Redux-Store

## Description

This mern-shopping web app is used to create an Graql API with Apollo Server and Redux for the product state management purpose. MERN stack is implemented to create the app. User can sign up and log in for an account, User can choose a category and can add product to his/her own cart.

Category Types:

1. Food
2. Household Supplies
3. Electronics
4. Books
5. Toys

    I am saving the user id-tokon on my local storage.
    User can see order history, detail of the product type
    User can add and remove product from the cart.

## Tools Used

1. Node.js
2. Express
3. React
4. Redux
5. Stripe
6. Apollo Server
7. Graphql
8. Mongodb
9. Mongoose
10. Dotenv
11. Heroku

## screenshots
displaying all categories when user is not logged in 

![1](screenshots/1.png)

displaying signup page

![2](screenshots/2.png)

displaying login page

![3](screenshots/3.png)

displaying when user tries to login

![4](screenshots/4.png)

displaying all categories when user is logged in 

![5](screenshots/5.png)

after clicking food category 

![6](screenshots/6.png)

after clicking order history

![7](screenshots/7.png)

after clicking detail product 

![8](screenshots/8.png)

after clicking add to cart button

![9](screenshots/9.png)

after clicking checkout button

![10](screenshots/10.png)

after clicking shopping Cart icon

![11](screenshots/11.png)

the same functionality when its deployed on heroku.

![12](screenshots/12.png)


## Installation & Database SetUp

To use this app just clone my project repos.

1. go into the root directory of this project and install all dependency using (npm i).
2. create .env file on the root directory and paste the following files there.

    1. MONGODB_URI="mongodb+srv://mongodbUsername:mongodbPassword@cluster0.nhwls.mongodb.net/googlebooks?retryWrites=true&w=majority"
    2. use this if you are using local databse "mongodb://localhost:27017/googlebooks"
    3. PORT= 3001
    4. NODE_ENV="development"
    5. JWT_SECRET="user's secret key" 

3. Run "npm start" for the port to start listening with mongoose.

## Heroku

1. the app is deployed on heroku

2. remote deployed link: ( https://challenge-22-abel-extra-credit-bd45ca726265.herokuapp.com/ )


## About me:

git repo profile: https://github.com/AbelZemo 

