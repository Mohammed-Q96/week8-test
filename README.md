# week8-test

### Tasks:

This test build up on the week 7 test, now to contunie for this week the task is that only signed in user will be able to add a city and get the cities.


#### Setting the project
*In this task you need to restructure the database because we are going to add user table to the schema, follow these steps to get it done.

- **Fork** this repo.
- Create `config.env` file
- Add the database url in the `config.env`.
- run `npm i` to install the needed pacakges

#### Build The database
-  Chage the `build.sql` file so that it creates a `user` table that has  `email` (**unique**) and `password` attributes
- Build your database by creating `build.js` file, or build it using CLI.


#### Build the needed queries

- Write function in `/server/database/queries/addUser` that takes `email` and `password` and add them to the database (needed for signup controller)
- Write function in `/server/database/queries/getUser` that takes `email` and then returns their password (needed to handle user login)


#### Write your controllers 

In `controllers/index.js` you need to handle 

-  `POST /signup` that should handle the request that adds a user to the database, if the email already exists it should respond accordingly. *Hence you may need to use the bcrypt pacakge*

- `POST /login` that should handle login request, if the login  details are correct then user should be logged by adding **cookie** and then redirect to the `/cities` page. *Hence you may need to use the jsonwebtoken pacakge and don't forget to hide your secret*

#### Secure Authenticated endpoints

Three endpoint should be secured, the server shouldn't add/return data in the following endpoint if the user is not logged in. You shuold Check if the user is signed in first if not redirect to the home page. Use `auth.js` as middleware for that.

- Add a city `POST /addcity`
- Cities page `GET /cities`
- Get all the cities `GET /all-cities`

#### Handle the errors correctly 

#### Stretch Goal

Add a logout button in the `cities` page and handle it.

#### Good Luck