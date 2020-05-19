const Comment = require('../models/comment');
const { check, validationResult } = require('express-validator/check');


exports.comment = (req, res, next) => {
  res.render('comment', { title: 'comment' });
}

exports.validate = (method) => {
  switch (method) {
    case 'postComment': {
     return [
      check('username', 'Username doesn\'t exists and/or is not between 3 and 20 characters').exists().isLength({ min: 3, max: 20 }),
      check('title', 'Title doesn\'t exists and/or is not between 1 and 60 characters').exists().isLength({ min: 1, max: 60 }),
      check('content', 'Content doesn\'t exists and/or is not between 1 and 140 characters').exists().isLength({ min: 1, max: 140 })
      ]
    }
  }
}

async function postComment (req, res, next) {

  const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

  const comment = new Comment({
    ...req.body
  });
  comment.save()
    .then(() => res.status(201).json({ comment: 'Comment posted' }))
    .catch(error => res.status(500).json({ error }));
};

async function getComment (req, res, next) {
    Comment.find()
      .then(comment => {
        if (!comment) {
          return res.status(401).json({ error: 'No comment !' });
        }
        res.status(201).json({ comment });
      })
      .catch(error => res.status(500).json({ error }));
};

async function getLastComment (req, res, next) {
  Comment.find()
    .sort({_id: -1})
    .limit(5)
    .then(comment => {
      if (!comment) {
        return res.status(401).json({ error: 'No comment !' });
      }
      res.status(201).json({ comment });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.postComment = postComment;
exports.getComment = getComment;
exports.getLastComment = getLastComment;
