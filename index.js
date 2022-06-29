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
