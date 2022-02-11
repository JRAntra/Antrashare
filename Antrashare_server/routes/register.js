const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { Profile } = require('../models/profile');

router.get("/getUserById/:id", async (req, res) => {
  console.log(req.params);
  const user = await Profile.findOne({ _id: req.params.id });
  if (!user) {
    return res.status(404).send("user not found.");
  }
  res.send(user);
});

router.get("/checkExistByEmail/:userEmail", async (req, res) => {
  console.log(req.params.userEmail);

  const user = await Profile.findOne({ userEmail: req.params.userEmail.toLowerCase() });

  if (!user) {
    return res.send(JSON.stringify("Email is OK to use."));
  }
  res.status(404).send("Email has been registered.")
});

router.get("/checkExistByUsername/:username", async (req, res) => {
  const user = await Profile.findOne({ userName: req.params.username.toLowerCase() });

  if (!user) {
    return res.send(JSON.stringify("username is OK to use"));
  }
  res.status(404).send(JSON.stringify("username has been used"));
});

router.post("/createNewAccount", async (req, res) => {

  const { error } = validate(req.body);
  if (error) {
      console.log(error);
      return res.status(400).send(error.details[0].message);
  }

  const userCheck = await Profile.findOne({
      userEmail: req.body.userEmail.toLowerCase(),
  });
  if (userCheck) {
      return res.status(400).send("User already registered.");
  }

  const user = new Profile({
      name: req.body.name,
      userName: req.body.userName,
      userEmail: req.body.userEmail.toLowerCase(),
      password: req.body.password,

      userRole: req.body.userRole,
      age: req.body.age,
      gender: req.body.gender,
      phone: req.body.phone,
  });
  // Encrypting password;
  const salt = await bcrypt.genSalt(10); 
  user.password = await bcrypt.hash(user.password, salt);
  // Save to database;
  await user.save();
  // Generate token;
  const token = Profile.generateAuthToken.call(user);
  
  res.header("bearerToken", token).send(
      _.pick(user, ["userEmail", "password", "userRole", "phone"])
  );
});

module.exports = router;