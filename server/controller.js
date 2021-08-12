const { fetchPersonalityTraits, fetchBreedInfo } = require('../db/queries.js');
const fetchPet = require('../db/apiquery.js');

const getTraits = (req, res) => {
  fetchPersonalityTraits()
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      res.status(500).send(`Error fetching traits: ${err}`);
      console.error(`Error fetching traits: ${err}\n\n${err.stack}`);
    });
};

const getPetMatch = (req, res) => {
  const trait = req.query.trait_id;
  const type = req.query.type;
  let gender = req.query.gender;

  if (!trait || !type || !gender) {
    res.status(400).send(`Request missing information: ${err}`);
  }

  if (gender === 'both') {
    gender = 'male,female';
  }

  fetchBreedInfo(trait, type)
    .then((breeds) => {
      return fetchPet(breeds, gender);
    })
    .then((pet) => res.status(200).send(pet))
    .catch((err) => {
      res.status(500).send(`Error fetching pets: ${err}`);
      console.error(`Error fetching pets: ${err}\n\n${err.stack}`);
    });
};

module.exports = {
  getTraits,
  getPetMatch
};
