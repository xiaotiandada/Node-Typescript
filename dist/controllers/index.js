"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../models/index");
// Create new Blog
exports.blogCreate = (req, res) => {
    // Request validation
    if (!req.body) {
        return res.status(400).send({
            message: "blog content can not be empty",
        });
    }
    // create blog
    const { title, author, body, comments, hidden, meta } = req.body;
    const blog = new index_1.Blog({
        title,
        author,
        body,
        comments,
        hidden,
        meta,
    });
    // Save Blog in the database
    blog.save()
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the blog.",
        });
    });
};
// findall blog
exports.blogFindAll = (req, res) => {
    index_1.Blog.find()
        .then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving blog.",
        });
    });
};
// Find a blog
exports.blogFindOne = (req, res) => {
    index_1.Blog.findById(req.params.blogId)
        .then((data) => {
        if (!(data)) {
            return res.status(404).send({
                message: "Blog not found with id " + req.params.blogId,
            });
        }
        res.send(data);
    }).catch((err) => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: "Blog not found with id " + req.params.blogId,
            });
        }
        return res.status(500).send({
            message: "Something wrong retrieving Blog with id " + req.params.blogId,
        });
    });
};
// Update a blog
exports.blogUpdate = (req, res) => {
    // Validate Request
    if (!req.body) {
        return res.status(400).send({
            message: "Blog content can not be empty",
        });
    }
    // Find and update blog with the request body
    const { title, author, body, comments, hidden, meta } = req.body;
    index_1.Blog.findByIdAndUpdate(req.params.blogId, {
        title,
        author,
        body,
        comments,
        hidden,
        meta,
    })
        .then((data) => {
        if (!data) {
            return res.status(404).send({
                message: "Blog not found with id " + req.params.blogId,
            });
        }
        res.send(data);
    }).catch((err) => {
        if (err.kind === "ObjectId") {
            return res.status(404).send({
                message: "Blog not found with id " + req.params.blogId,
            });
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.blogId,
        });
    });
};
// Delete a blog
exports.blogDelete = (req, res) => {
    index_1.Blog.findByIdAndRemove(req.params.blogId)
        .then((data) => {
        if (!data) {
            return res.status(404).send({
                message: "Blog not found with id " + req.params.blogId,
            });
        }
        res.send({ message: "Blog deleted successfully!" });
    }).catch((err) => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
            return res.status(404).send({
                message: "Blog not found with id " + req.params.blogId,
            });
        }
        return res.status(500).send({
            message: "Could not delete blog with id " + req.params.blogId,
        });
    });
};
//# sourceMappingURL=index.js.map