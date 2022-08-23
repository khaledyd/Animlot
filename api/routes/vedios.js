const router = require("express").Router();
const User = require("../models/User");
const Vedio = require("../models/Vedio");
const bcrypt = require("bcrypt");

//CREATE POST
router.post("/", async (req, res) => {
  const newVedio = new Vedio(req.body);
  try {
    const savedVedio = await newVedio.save();
    res.status(200).json(savedVedio);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
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

//DELETE POST
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

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const vedio = await Vedio.findById(req.params.id);
    res.status(200).json(vedio);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let vedios;
    if (email) {
      vedios = await Vedio.find({ email });
    } else if (catName) {
      vedios = await Vedio.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      vedios = await Vedio.find();
    }
    res.status(200).json(vedios);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;