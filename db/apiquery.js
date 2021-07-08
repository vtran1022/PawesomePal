const axios = require('axios');

const fetchPet = (breeds, gender) => {
  return fetchToken()
    .then((token) => {
      const params = {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          breed: breeds,
          gender
        }
      };

      return axios.get('https://api.petfinder.com/v2/animals', params)
        .then((data) => {
          const index = Math.floor(Math.random() * 20 + 1)
          return data.data.animals[index];
        });
    });
};

// this gets the access token
const fetchToken = () => {
  const headers = {
    "grant_type": process.env.GRANT_TYPE,
    "client_id": process.env.CLIENT_ID,
    "client_secret": process.env.CLIENT_SECRET
  };

  return axios.post('https://api.petfinder.com/v2/oauth2/token', headers)
    .then((response) => response.data.access_token);
};

module.exports = fetchPet;