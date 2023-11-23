const express = require("express");
const router = express.Router();
const notes = require("../modal/Notes");

router.get("/query", async (req, res) => {
  const { search, filter } = req.query;
  if (search && filter == "all") {
    const data = await notes
      .find({
        tag: search,
      })
      .exec();
    res.send(data);
  } else {
    const data = await notes
      .find({
        tag: search,
        documents__data__category__document_category_name: filter,
      })
      .exec();
    res.send(data);
  }
});

module.exports = router;
