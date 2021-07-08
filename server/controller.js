const { fetchPersonality, fetchBreedInfo } = require('../db/queries.js');
const fetchApiData = require('../db/apiquery.js');

const getTraits = (req, res) => {
  fetchPersonality()
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      res.status(500).send(`Error fetching traits: ${err}`)
      console.error(`Error fetching traits: ${err}\n\n${err.stack}`);
    });
};

const getPetMatch = (req, res) => {
  let gender;
  if (req.body.gender === 'both') {
    gender = 'male,female';
  }

  fetchBreedInfo([ req.body.trait_id, req.body.type ])
    .then((breeds) => {
      fetchApiData([breeds, gender])
      .then((data) => res.status(200).send(data));
    })
    .catch((err) => {
      res.status(500).send(`Error fetching pets: ${err}`)
      console.error(`Error fetching pets: ${err}\n\n${err.stack}`);
    });
};

module.exports = {
  getTraits,
  getPetMatch
}