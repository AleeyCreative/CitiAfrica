const countries = [
{id:1,country:'Nigeria', capital:'Abuja'},
{id:2,country:'Ghana', capital:'Accra'},
{id:3,country:'South Africa', capital:'Cape Town'}
]

class Country{
	constructor(id) {
		this.id = id
	}

	getCountry({id}){
		return countries.filter(country => id == country.id)[0]
	}
	getAll(){
		return countries
	}
}


const rootResolver = {
	getCountry : ({id}) => new Country(id),
	getAll : () => new Country(),
	time : () => new Date().toTimeString()
}
