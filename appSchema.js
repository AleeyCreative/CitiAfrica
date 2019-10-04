const {buildSchema} = require('graphql')

module.export = buildSchema(`
	type Country{
		id : Int
		country : String
		capital : String
	}

	type Query {
		getCountry(id:Int!): Country
		getAll: [Country]
		time : String
	}
`)
