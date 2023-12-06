const express = require("express");
const router = express.Router();
const notes = require("../modal/Notes");
const video = require("../modal/video");

router.get("/query", async (req, res) => {
  const { search } = req.query;
  if (search) {
    // const filter = { tag: search };
    // res.send(filter);
    const data = await notes.find({ tag: search }).exec();
    res.send(data);
  }
});
router.get("/playlist/query", async (req, res) => {
  const { tag } = req.query;
  if (tag) {
    // const filter = { tag: search };
    // res.send(filter);
    const data = await video.find({ tag: tag }).exec();
    res.send(data);
  }
});

module.exports = router;
