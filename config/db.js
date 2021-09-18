'use strict'

// creating a base name for the mongodb
const mongooseBaseName = 'cakemos'

// create the mongodb uri for development and test

// initial config
const database = {
  development: `mongodb://localhost/${mongooseBaseName}-development`,
  test: `mongodb://localhost/${mongooseBaseName}-test`
}

// `mongodb+srv://admin:ZvjszV50SJhYJnfp@cakemoscluster0.ieuly.mongodb.net/${mongooseBaseName}-development?retryWrites=true&w=majority`
// `mongodb+srv://admin:ZvjszV50SJhYJnfp@cakemoscluster0.ieuly.mongodb.net/${mongooseBaseName}-test?retryWrites=true&w=majority`

// const database = {
//   development: `mongodb+srv://admin:ZvjszV50SJhYJnfp@cakemoscluster0.ieuly.mongodb.net/${mongooseBaseName}-development?retryWrites=true&w=majority`,
//   test: `mongodb+srv://admin:ZvjszV50SJhYJnfp@cakemoscluster0.ieuly.mongodb.net/${mongooseBaseName}-test?retryWrites=true&w=majority`
// }

// Identify if development environment is test or development
// select DB based on whether a test file was executed before `server.js`
const localDb = process.env.TESTENV ? database.test : database.development

// Environment variable DB_URI will be available in
// heroku production evironment otherwise use test or development db
const currentDb = process.env.DB_URI || localDb

module.exports = currentDb
