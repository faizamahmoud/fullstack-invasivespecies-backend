touch .gitignore .env server.js

  ## **Setting up the Express app**

- create a new node project `npm init -y`
- install dependencies `npm install dotenv mongoose express cors morgan`
- install dev dependencies `npm install --save-dev nodemon`
- setup npm scripts
"scripts": {
    "start": "node server.js", - so can use npm start
    "dev":"nodemon server.js" - npm run dev - runs nodemon
  }
npm i morgan cors



## Configuring the People router

Each request made to our backend must be sent to the correct `end-point` in our API. Using  RESTful routing conventions we should create `stub` routes for the following endpoints:

| Path | Method | Action | Mongoose |  |
| --- | --- | --- | --- | --- |
| /people/ | GET | index | db.People.find() |  |
| /people/ | POST | create | db.People.create(req.body) |  |  - Use postman or CURL to make a GET request to the newly created peroson /people endpoint:- `curl -X GET <http://localhost:4040/invasivespecies/<mongoID>`>
| /people/:id | GET | show | db.findById(req.params.id) |  |

### **Where are the *rest* of the routes?**

We only need five routes per model for our basic API, our `new` and `edit` GET routes routes for from unit two will be 
handled on the front end. Previously, in unit 2, we had to make pages that a user could visit to create and update a 
resource (`new.ejs` / `edit.ejs`). Our MERN application delegates all HTML content to our React frontend. Our Express backend 
is only concerned with serving data that will be consumed by the frontend application.