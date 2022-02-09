const express = require('express');
const router = express.Router();

const { News, validate } = require('../models/news');

router.get("/", async (req, res) => {
  const news = await News.find().sort({ publishedTime: 'desc' });
  res.send(news);
});

router.get('/:id', async (req, res) => {
  const news = await News.findOne({_id: req.params.id});
  res.send(news);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    console.log(error);
    return res.status(400).send(error.details[0].message);
  }

  const news = new News(req.body);
  await news.save();
  res.send(news);
});

router.patch("/addComment/:id", async (req, res) => {
  const news = await News.find({ _id: req.params.id });
  if (!news.length) {
    return res.status(404).send("Story not found.");
  }

  const query = { _id: req.params.id };
  const update = {
    $push: {
      comment: {
        publisherName: req.body.publisherName,
        publishedTime: req.body.publishedTime,
        content: {
          image: req.body.content.image,
          video: req.body.content.video,
          text: req.body.content.text,
        },
      },
    },
  };

  const options = { upsert: false };
  await News.updateOne(query, update, options)
    .then((result) => {
      const { matchedCount, modifiedCount } = result;
      if (matchedCount && modifiedCount) {
        console.log(`Successfully added a new comment.`);
      }
    })
    .catch((err) => console.error(`Failed to add comment: ${err}`));

  res.send(await News.find(query));
});

router.delete("/deletePost/:id", async (req, res) => {
  const news = await News.find({ _id: req.params.id });

  if (!news.length)
    return res.status(404).send("Post is not exist.");

  await News.deleteOne({ _id: req.params.id });
  // res.send("Post has been deleted.");
  res.status(204).send();
});

module.exports = router;