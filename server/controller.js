const { fetchPersonalityTraits, fetchBreedInfo } = require('../db/queries.js');
const fetchPet = require('../db/apiquery.js');

const getTraits = (req, res) => {
  fetchPersonalityTraits()
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      res.status(500).send(`Error fetching traits: ${err}`)
      console.error(`Error fetching traits: ${err}\n\n${err.stack}`);
    });
};

const getPetMatch = (req, res) => {
  let gender = req.query.gender;
  if (gender === 'both') {
    gender = 'male,female';
  }

  fetchBreedInfo(req.query.trait_id, req.query.type)
    .then((breeds) => {
      fetchPet(breeds, gender)
      .then((data) => res.status(200).send(data))
    })
    .catch((err) => {
      res.status(500).send(`Error fetching pets: ${err}`)
      console.error(`Error fetching pets: ${err}\n\n${err.stack}`);
    });
};

module.exports = {
  getTraits,
  getPetMatch
};