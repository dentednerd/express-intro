/* eslint-disable no-console */

const User = require('../models/User');

exports.getAllUsers = (req, res) => {
    User.find({})
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};

exports.getUserById = (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then((user) => {
            if (!user) {
                res.status(404).json({
                    message: 'Could not find user with ID: ' + id
                });
            } else {
                res.render('user', user);
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};