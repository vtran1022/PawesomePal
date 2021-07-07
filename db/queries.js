const pool = require('./index.js');

const fetchPersonality = (params) => {
  const queryStr = `SELECT id FROM personality WHERE trait = $1`;
  console.log('db', [params]);
  return pool.query(queryStr, [params])
    .then((data) => {

      console.log(data.rows)

    });
};



module.exports = {
  fetchPersonality
}