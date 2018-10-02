// Load DB models
const Post = require('./../../models/Post');

// Load input validator
const validatePostInput = require('./../../validation/post');

const postCreate = (req, res) => {
    // validate post input
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    // extract fields from post req body
    const newPostFields = {};
    newPostFields.user = req.user._id;
    if (req.body.text) newPostFields.text = req.body.text.trim();
    if (req.body.name) newPostFields.name = req.body.name.trim();
    if (req.body.avatar) newPostFields.avatar = req.body.avatar.trim();

    // create post
    const newPost = new Post(newPostFields);

    newPost.save().then(post => {
        if (!post) {
            errors.nopost = 'Unable to create new post';
            return res.status(400).json(errors);    
        }

        return res.status(201).json(post);
    }).catch(err => res.status(400).send());
};

const postByIdDelete = (req, res) => {
    const errors = {};
    const userId = req.user._id;
    const { postId } = req.params;
    
    Post.findOneAndDelete({
        _id: postId,
        user: userId
    })
    .then(post => {
        if (!post) {
            errors.nopost = 'No post found';
            return res.status(404).json(errors);
        }
        return res.status(200).json(post);
    })
    .catch(err => res.status(400).send(err));
};

const postByIdUpdate = (req, res) => {
    // validate post input
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const userId = req.user._id;
    const { postId } = req.params;

    const updatedPost = {};
    if (req.body.text) updatedPost.text = req.body.text.trim();
    if (req.body.name) updatedPost.name = req.body.name.trim();
    if (req.body.avatar) updatedPost.avatar = req.body.avatar.trim();

    const conditions = {
        user: userId,
        _id: postId
    }

    const update = { $set: updatedPost };

    const options = { new: true };

    Post.findOneAndUpdate(conditions, update, options)
        .then(post => {
            if (!post) {
                errors.nopost = 'No post found';
                return res.status(404).json(errors);    
            }

            return res.status(200).json(post);
        })
        .catch(err => res.status(400).send());

};

const postByIdGet = (req, res) => {
    const errors = {};
    const userId = req.user._id;
    const { postId } = req.params;
    
    Post.findOne({
        _id: postId,
        user: userId
    })
    .then(post => {
        if (!post) {
            errors.nopost = 'No post found';
            return res.status(404).json(errors);
        }
        return res.status(200).json(post);
    })
    .catch(err => res.status(400).send(err));
};


module.exports = {
    postCreate,
    postByIdDelete,
    postByIdUpdate,
    postByIdGet
};