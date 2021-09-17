# brand
Influencer platform

# Links

[Deployed server](https://cakemos.herokuapp.com/)

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
- Commit to your local main branch (if you do not have a branch named main, you can create one with `git checkout -b main`)
- Push your latest code to Heroku (`git push heroku main`)
- Add any addons. See MongoDB Atlas or AWS
- In terminal, run: `git push heroku main` (should build your site)
Note: Due to the first line of code in the server.js file, the default deployment environment will be production
-  You need to set your CLIENT_ORIGIN so that your deployed API will ONLY accept requests from the correct domain. IF you're client is deployed on GitHub, your ORIGIN will be: https://<% github username %>.github.io
- Set your client ORIGIN by: heroku config:set CLIENT_ORIGIN="https://<% github username %>.github.io"
-  Your site is published at https://mindmarine.github.io/gracelli/
-  `heroku config:set CLIENT_ORIGIN="https://mindmarine.github.io"`
-  You should have (at least) two config variables set in heroku (heroku>settings>config vars): DB_URI and CLIENT_ORIGIN
- If you are using AWS, you should have two additional config variables.
- Once all of these are set, run in terminal: `heroku restart`
- Then in terminal, run: `heroku open`

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
- in the terminal run: `heroku config:set DB_URI="<your-connection-string>"`, replacing the <password>
- Ex: `heroku config:set DB_URI="mongodb+srv://admin:yellowpencil@cluster0.pygcn.mongodb.net/atlas_db_test?retryWrites=true&w=majority"`
NOTE: You don't have a database at this point yet, but MongoDB will create it as soon as you use your application to create data. 
So, in the example above, the atlas_db_test database will not exist until the first user is created via a sign-up.

# Client
…or push an existing repository from the command line
git remote add origin git@github.com:mindmarine/cakemos-client.git
git branch -M main
git push -u origin main