const gravatar = require('gravatar');

// Load User model
const User = require('./../../models/User');

// Load validators
const validateRegisterInput = require('./../../validation/register');
const validateLoginInput = require('./../../validation/login');

const userRegister = (req, res) => {
    let { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).send(errors);
    }

    const { name, email, password } = req.body;

    User.findOne({ email })
        .then(user => {
            if (user) {
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            }

            // return a gravatar url
            const avatar = gravatar.url(email, {
                s: '200', // size
                r: 'pg', // rating
                d: 'mm', // default
            });

            const newUser = new User({
                name,
                email,
                password,
                avatar
            });
            
            newUser.save((error, result) => {
                if (error) {
                    errors.register = 'Unable to register new user';
                    return res.status(400).json(errors);
                }

                return res.status(201).json({ name, email, avatar });
            });
        })
        .catch(err => res.status(400).send(err));
};

const userLogin = (req, res) => {
    let { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const { email, password } = req.body;
    let foundUser;

    User.findByCredential(email, password)
        .then(user => {
            // res.status(200).send(user);
            foundUser = user;
            return user.generateToken();
        })
        .then(token => {
            res.status(200).send({
                success: true,
                token: `Bearer ${token}`
            });
        })
        .catch(err => res.status(400).send());   
};

const userCurrentGet = (req, res) => {
    const { _id, email, name } = req.user;
    res.status(200).send({ _id, email, name });
};

module.exports = {
    userRegister,
    userLogin,
    userCurrentGet
};