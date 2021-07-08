const pool = require('./index.js');

const fetchPersonality = (params) => {
  const queryStr = 'SELECT id FROM personality WHERE trait = $1';
  return pool.query(queryStr, [params])
    .then((data) => data.rows[0].id);
};

const fetchAdditionalInfo = (params) => {
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
  fetchAdditionalInfo
};