const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Joi = require('joi');

const { Profile } = require('../models/profile');

router.get("/", async (req, res) => {
  const users = await Profile.find().sort({ userName: 'desc' });
  res.send(users);
});

router.get("/getProfile/:userNameOrEmail", async (req, res) => {
  console.log(req.params.userName);
  const user = await Profile.findOne(
    { $or: [{ userName: req.params.userNameOrEmail }, { userEmail: req.params.userNameOrEmail }] }
  );
  if (!user) {
    return res.status(404).send("user not found.");
  }
  res.send(user);
});

module.exports = router;