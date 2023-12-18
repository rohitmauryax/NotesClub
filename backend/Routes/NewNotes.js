const express = require("express");
const router = express.Router();
const Notes = require("../modal/Notes");
const video = require("../modal/video");

router.post("/", (req, res) => {
  console.log(req.body);
  const note = Notes(req.body);
  note.save();
  res.send(req.body);
});

router.post("/playlist", (req, res) => {
  const content = video(req.body);
  content.save();
  res.send("Success");
});

module.exports = router;
