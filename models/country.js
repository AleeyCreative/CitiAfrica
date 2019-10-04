const {Schema, model} = require('mongoose')

const countrySchema = Schema({
country : String,
capital : String
})

moduele.export = model('country',countrySchema)
