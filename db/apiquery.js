const axios = require('axios');

const fetchApiData = () => {
  const breed = 'pug,corgi';
  const gender = 'male'

  return fetchToken()
    .then((token) => {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          breed,
          gender
        }
      };

      return axios.get('https://api.petfinder.com/v2/animals', config)
        .then((data) => console.log(data.data.animals));
    })
    .catch((err) => console.error(`Error getting access token: ${err}\n\n${err.stack}`));
};


const fetchToken = () => {
  const headers = {
    "grant_type": process.env.GRANT_TYPE,
    "client_id": process.env.CLIENT_ID,
    "client_secret": process.env.CLIENT_SECRET
  };

  return axios.post('https://api.petfinder.com/v2/oauth2/token', headers)
    .then((response) => response.data.access_token);
};

module.exports = fetchApiData;