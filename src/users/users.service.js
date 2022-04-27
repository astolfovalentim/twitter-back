const User = require("../model/user");

const findByEmailUserService = (email) => User.findOne({ email: email });

const createUserService = (body) => User.create(body);

module.exports = { findByEmailUserService, createUserService };
