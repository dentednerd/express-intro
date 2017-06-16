/* eslint-disable no-console */

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('../models/User');
const faker = require('faker');
const range = require('lodash/range');

const DB_URI = 'mongodb://localhost:27017/express-intro';
mongoose.connect(DB_URI)
  .then(() => {
    console.log(`Connected to DB ${DB_URI}`);
    return mongoose.connection.db.dropCollection('users');
  })
  .then(() => {
    console.log('Dropped users collection!');
    const userSavePromises = range(20).map(() => {
      return new User({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatarUrl: faker.internet.avatar()
      }).save();
    });

    return Promise.all(userSavePromises);
  })
  .then(savedUsers => {
    console.log(`Saved ${savedUsers.length} users`);
    mongoose.disconnect();
  })
  .catch(console.log);