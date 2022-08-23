const router = require("express").Router();
const User = require("../models/User");
const Vedio = require("../models/Page");
const bcrypt = require("bcrypt");
const Page = require("../models/Page");

//CREATE POST
router.post("/", async (req, res) => {
  const newPage = new Page(req.body);
  try {
    const savedPage = await newPage.save();
    res.status(200).json(savedPage);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);
    if (page.email === req.body.email) {
      try {
        const updatedPage = await Page.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPage);
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
    const page = await Page.findById(req.params.id);
    if (page.email === req.body.email) {
      try {
        await page.delete();
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
    const page = await Page.findById(req.params.id);
    res.status(200).json(page);
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