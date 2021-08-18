const Post = require("../models/post");

const saveTask = async (req, res) => {
    if (!req.body.text || !req.body.hashtag)
    return res.status(400).send("Process failed: Incomplete data");

    const post = new Post({
        userId: req.user._Id,
        text: req.body.text,
        hashtag: req.body.hashtag,
    });

    const result = await post.save();
    if(!result)
        return res.status(400).send("Process failed: Failed to register task");
        return res.status(200).send({ result });
};

listPost = async (req, res) => {
    let post = await Post.find()
    if(!post || post.length == 0) return res.status(401).send("No post")
    return res.status(200).send({ post })
}

module.exports = { saveTask, listPost };