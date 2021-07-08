const pool = require('./index.js');
const axios = require('axios');

// send personality traits to the client-side
const fetchPersonality = () => {
  const queryStr = 'SELECT * FROM personality';
  return pool.query(queryStr)
    .then((data) => data.rows);
};

const fetchBreedInfo = (params) => {
  let queryStr;

  // if user selects both cat and dog
  if (params[1] === 'both') {
    queryStr = 'SELECT breed FROM petfinder_params WHERE personality_id = $1';
    return pool.query(queryStr, [params[0]])
      .then((data) => {
        let breeds = [];
        data.rows.forEach(obj => breeds.push(obj.breed));
        return breeds;
      });
  }

  queryStr = 'SELECT breed FROM petfinder_params WHERE personality_id = $1 AND type = $2';
  return pool.query(queryStr, params)
    .then((data) => {
      let breeds = [];
      data.rows.forEach(obj => breeds.push(obj.breed));
      return breeds;
    });
};

module.exports = {
  fetchPersonality,
  fetchBreedInfo
};