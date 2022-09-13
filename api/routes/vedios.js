const router = require("express").Router();
const User = require("../models/User");
const Vedio = require("../models/Vedio");
const bcrypt = require("bcrypt");

//CREATE vedio
router.post("/", async (req, res) => {
  const newVideo = new Vedio(req.body);
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
 
  }
});


//UPDATE vedio
router.put("/:id", async (req, res) => {
  try {
    const vedio = await Vedio.findById(req.params.id);
    if (vedio.email === req.body.email) {
      try {
        const updatedVedio = await Vedio.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedVedio);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE vedio
router.delete("/:id", async (req, res) => {
  try {
    const vedio = await Vedio.findById(req.params.id);
    if (vedio.email === req.body.email) {
      try {
        await vedio.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET vedio
router.get("/:id", async (req, res) => {
  try {
    const vedio = await Vedio.findById(req.params.id);
    res.status(200).json(vedio);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL vedio
router.get("/", async (req, res) => {
  const email = req.query.email;
  const type = req.query.type;
  try {
    let vedios;
    if (email , type) {
      vedios = await Vedio.find({ email,type });
    
    } else {
      vedios = await Vedio.find();
    }
    res.status(200).json(vedios);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;