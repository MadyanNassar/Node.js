const express = require('express')
const fs = require('fs');
const app = express();
 
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// YOUR CODE GOES IN HERE

// Reading post
app.get('/blogs/:title', (req, res) => {
    const title = req.params.title;
    if (fs.existsSync(title)) {
      const post = fs.readFileSync(title);
      res.end(post);
    } else {
      res.status(400).end({msg: "No content , please check the title"});
    }
  });

  // Creating new post
  app.post('/blogs', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    if (!title || !content) {
      return res.status(400).send({ msg: "can not create post without title or content " });
    }
    fs.writeFileSync(title, content);
    res.end({ msg : 'Done!! , the post is already created'});
  });

  // Updating post
  app.put('/posts/:title', (req, res) => {
    const title = req.params.title;
    const content = req.body.content;
    if (fs.existsSync(title)) {
      fs.writeFileSync(title, content);
      res.end('Done!! , the post is already updated');
    } else {
      res.status(400);
      res.send({ msg: 'There is no post to update with this title, please check the title!' });
    }
  });

  //  Deleting post
  app.delete('/blogs/:title', (req, res) => {
    const title = req.params.title;
    if (fs.existsSync(title)) {
      fs.unlinkSync(title);
      res.end('Done!! , the post is already deleted');
    } else {
      res.status(400).
      res.send({ msg: 'There is no post to delete with this title, please check the title!' });
    }
  });
  

  app.listen(3000 , ()=> console.log('Start listening')); 