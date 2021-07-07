/*
Use this command line to create the database first in terminal
CREATE DATABASE pawesome WITH OWNER = hrvy ENCODING = 'UTF8';

then run this file with the command:
psql -d pawesome -a -f schema.sql

to create the tables within that database
*/

CREATE TABLE IF NOT EXISTS personality (
  id SERIAL PRIMARY KEY,
  trait VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS petfinder_params (
  id SERIAL PRIMARY KEY,
  type VARCHAR(50) NOT NULL,
  breed VARCHAR(50) NOT NULL,
  CONSTRAINT fk_personality
    FOREIGN KEY(personality_id)
      REFERENCES personality(id)
);

CREATE INDEX personality_petfinder_index ON petfinder_params(personality_id);

COPY personality
FROM '../data/personality.csv'
DELIMITER ','
CSV HEADER;

COPY petfinder_params
FROM '../data/pf_params.csv'
DELIMITER ','
CSV HEADER;