import express from "express";
import { googleAuth, signin, signup } from "../controllers/auth.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const router = express.Router();

//CREATE A USER
router.post("/signup", async(req,res)=>{
    try {
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
    
        const saltt = await bcrypt.genSalt(10);
        const hashedPasss = await bcrypt.hash(req.body.confirmPassword, saltt);
    
        if (password !== confirmPassword) {
          return res.status(500).send({ message: "Passwords Must be same" });
        }
    
        const newUser = new User({
          displayname: req.body.displayname,
          email: req.body.email,
          password: hashedPass,
          confirmPassword: hashedPasss,
        });
        const user = await newUser.save();
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json(err);
      }
})

//SIGN IN
router.post("/signin", signin)

//GOOGLE AUTH
router.post("/google", googleAuth)

export default router;
