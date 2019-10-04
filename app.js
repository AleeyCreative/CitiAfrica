const express = require('express')
const bodyParser = require('body-parser')
const uuid = require('uuid')
const graphqlHTTP = require('express-graphql')
const http = require('http')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const schema = require('./appSchema')
const resolvers = require('./resolvers/index.js')

dotenv.config()

let app = new express()
let server = http.createServer(app)

const port = process.env.PORT || 4000
app.get('/', graphqlHTTP({
	rootValue : resolvers,
	schema : schema,
	graphiql : true
}))

mongoose.connect('mongodb://localhost/citiAfrica')
server.listen(port, () => console.log(`the app is running on port ${port}`))

