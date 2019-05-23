import { Blog } from '../models/index'
import { Request, Response} from "express";


//Create new Blog
export const blogCreate = (req: Request, res: Response) => {
  // Request validation
  if(!req.body) {
    return res.status(400).send({
        message: "blog content can not be empty"
    });
  }
  
  // create blog
  const { title, author, body, comments, hidden,meta } =req.body
  const blog = new Blog({
      title,
      author,
      body,
      comments,
      hidden,
      meta
  })

// Save Blog in the database
  blog.save()
  .then((data:any) => {
    res.send(data)
  })
  .catch((err:any) => {
    res.status(500).send({
      message: err.message || "Something wrong while creating the blog."
    })
  })
}

// findall blog
export const blogFindAll = (req:Request, res:Response) => {
  Blog.find()
  .then((data:any) => {
      res.send(data);
  }).catch((err:any) => {
      res.status(500).send({
          message: err.message || "Something wrong while retrieving blog."
      });
  });
};

// Find a blog
export const blogFindOne = (req:Request, res:Response) => {
  Blog.findById(req.params.blogId)
  .then((data:any) => {
      if(!(data)) {
          return res.status(404).send({
              message: "Blog not found with id " + req.params.blogId
          });            
      }
      res.send(data);
  }).catch((err:any) => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Blog not found with id " + req.params.blogId
          });                
      }
      return res.status(500).send({
          message: "Something wrong retrieving Blog with id " + req.params.blogId
      });
  });
};

// Update a blog
export const blogUpdate = (req:Request, res:Response) => {
  // Validate Request
  if(!req.body) {
      return res.status(400).send({
          message: "Blog content can not be empty"
      });
  }

  // Find and update blog with the request body
  const { title, author, body, comments, hidden,meta } =req.body
  Blog.findByIdAndUpdate(req.params.blogId, {
    title,
    author,
    body,
    comments,
    hidden,
    meta
  })
  .then((data:any) => {
      if(!data) {
          return res.status(404).send({
              message: "Blog not found with id " + req.params.blogId
          });
      }
      res.send(data);
  }).catch((err:any) => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Blog not found with id " + req.params.blogId
          });                
      }
      return res.status(500).send({
          message: "Something wrong updating note with id " + req.params.blogId
      });
  });
};

// Delete a blog
export const blogDelete = (req:Request, res:Response) => {
  Blog.findByIdAndRemove(req.params.blogId)
  .then((data:any) => {
      if(!data) {
          return res.status(404).send({
              message: "Blog not found with id " + req.params.blogId
          });
      }
      res.send({message: "Blog deleted successfully!"});
  }).catch((err:any) => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "Blog not found with id " + req.params.blogId
          });                
      }
      return res.status(500).send({
          message: "Could not delete blog with id " + req.params.blogId
      });
  });
};