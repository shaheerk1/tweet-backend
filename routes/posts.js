const router = require("express").Router();
const Post = require("../model/post");

router.get("/", async (req, res) => {
  console.log("post route accessed");
  res.send("post");
});

router.get("/posts", async (req, res) => {
  try {
    let posts = await Post.find();
    res.json(posts);
    console.log("GET request to /posts Success");
  } catch (err) {
    console.log(err);
  }
});

router.post("/upload", async (req, res) => {
  try {
    // Create new user
    let post = new Post({
      tweet: req.body.tweet,
      userId: req.body.userId,
    });
    // Save user
    await post.save();
    res.json(post);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
