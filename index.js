const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://car-data.p.rapidapi.com/cars/makes',
  headers: {
    'X-RapidAPI-Key': '4f05868062msh8d5b131431edda5p14e716jsn4e745ec58bc5',
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



let vehicles = async () =>
{
    let response = await fetch(
      "https://car-data.p.rapidapi.com/cars/types'",
      
      options
    );
    let cars = await response.json()
    console.log( cars );

    let dataCount = document.getElementById( "fetched" );
      
    cars.map( ( car ) =>
    {
        let row = `<li> ${ car.make }: ${ car.model }</li>`;
        dataCount.innerHTML+=row
   ;
    });
   
}
vehicles()

