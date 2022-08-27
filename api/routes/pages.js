const router = require("express").Router();
const User = require("../models/User");
const Vedio = require("../models/Page");
const bcrypt = require("bcrypt");
const Page = require("../models/Page");


//CREATE POST
 router.post("/lotseeting", async (req, res) => {
  const newPage = new Page({
    pagename: req.body.pagename,
      catname: req.body.catname,
  });
  try {
    const savedPage = await newPage.save();
    res.status(200).json(savedPage);
  } catch (err) {
    res.status(500).json(err);
  }
});



/*router.post("/Lotseeting", async (req, res) => {
  try {
    
   
    const newPage = new Page({
      pagename: req.body.pagename,
      catname: req.body.catname,
     
    });

    const page = await newPage.save();
    res.status(200).json(page);
  } catch (err) {
    res.status(500).json(err);
  }
}); */













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
  const pagename = req.query.page;
  const catName = req.query.cat;
  try {
    let pages;
    if (pagename, catName) {
      pages = await Page.find({ pagename,catName });
    }  else {
      pages = await Page.find();
    }
    res.status(200).json(pages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;