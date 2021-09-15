# brand
Influencer platform

# User stories

## As a user
- I would like to sign up with email and password
- I would like to sign in with email and password
- I would like to be able to change my password
- I would like to sign out
  
### V1
- I would like to add a new influencer
- I would like to update an influencer
- I would like to delete an influencer
- I would like to see all influencers

### V2 
- I would like to filter influencers
- As a client I would like to filter influencers

### V3 

# Wireframe
![Wireframe](https://i.imgur.com/dqMtst7.png)

# Entity Relationship Diagram
![Wireframe](https://i.imgur.com/OqakIeV.png)

# Technologies
- React framework
- Express API framework
- MongoDB
- Mongoose
- Git, GitHub
- Heroku platform
- MongoDB platform
- Bootstrap
- JavaScript, JSX, HTML, CSS, sass
- Node.js
- Axios
- Npm
- Docker
- Mocha
- Chai

# deploy to heroku
- Run `heroku create`
- run `heroku git:remote -a cakemos`
- set git remote `heroku` to `https://git.heroku.com/cakemos.git`

# MondoDb Atlas
- https://cloud.mongodb.com/ and sign in
- create project, create cluster: CakemosCluster0
- create database
- connect db
1. Add a connection IP address: Allow Access From Anywhere
2. Create a Database User: Username: admin Password ZvjszV50SJhYJnfp
- choose a connection method (connect your application)
1. select your driver and version: driver: node.js version: 4.0 or later
2. Add your connection string into your application code
`mongodb+srv://admin:<password>@cakemoscluster0.ieuly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`