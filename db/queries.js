const pool = require('./index.js');
const axios = require('axios');

// send personality traits to the client-side
const fetchPersonalityTraits = () => {
  const queryStr = 'SELECT * FROM personality';
  return pool.query(queryStr)
    .then((data) => data.rows);
};

const fetchBreedInfo = (id, type) => {
  let queryStr;

  // if user selects both cat and dog
  if (type === 'both') {
    queryStr = 'SELECT breed FROM petfinder_params WHERE personality_id = $1';
    return pool.query(queryStr, [id])
      .then((data) => {
        let breeds = [];
        data.rows.forEach(obj => breeds.push(obj.breed));
        return breeds.toString();
      });
  }

  queryStr = 'SELECT breed FROM petfinder_params WHERE personality_id = $1 AND type = $2';
  return pool.query(queryStr, [id, type])
    .then((data) => {
      let breeds = [];
      data.rows.forEach(obj => breeds.push(obj.breed));
      return breeds.toString();
    });
};

module.exports = {
  fetchPersonalityTraits,
  fetchBreedInfo
};