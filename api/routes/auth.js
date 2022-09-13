const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const res = require("express/lib/response");
//sing up

router.post("/singup", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//sig in
//sing up with google

router.post("/google", async (req, res) => {
  try {
    const newUser = new User({
      email: req.body.email,
      fromGoogle: true,
    });

    const user = await newUser.save();
    res.status(200).json(user._doc);
  } catch (err) {
    res.status(500).json(err);
  }
});

//sing in
router.post("/singin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//sing in with google
router.post("/google", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("Wrong credentials!");

    //const validated = await bcrypt.compare(req.body.password, user.password);
    //!validated && res.status(400).json("Wrong credentials!");

    ///const { password, ...others } = user._doc;
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

/*router.post("/google", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(200).json(user._doc);
    } else {
      const newUser =  new User({
        ...req.body,
        fromGoogle: true,
      });
      const savedUser = await newUser.save();
      res.status(200).json(savedUser._doc)

    }
  }
  catch (err) {

  }

}) */ 
 

module.exports = router;
