const { fetchPersonality, fetchBreedInfo } = require('../db/queries.js');

const getTraits = (req, res) => {
  fetchPersonality()
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      res.status(500).send(`Error fetching traits: ${err}`)
      console.error(`Error fetching products: ${err}\n\n${err.stack}`);
    });
};

const getPetMatch = (req, res) => {

};

module.exports = {
  getTraits,
  getPetMatch
}