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
      check('content', 'Content doesn\'t exists and/or is not between 1 and 200 characters').exists().isLength({ min: 1, max: 200 })
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

  today = new Date();
  date = today.toLocaleDateString();
  time = today.toLocaleTimeString("fr-FR");
  dateTime = date+'  '+time;
  const comment = new Comment({
    username: req.body.username,
    title: req.body.title,
    content: req.body.content,
    created_at: dateTime
  });
  comment.save()
    .then(() => res.status(201).json({ comment }))
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


async function get50LastComment (req, res, next) {
  Comment.find()
    .sort({_id: -1})
    .limit(50)
    .then(comment => {
      if (!comment) {
        return res.status(401).json({ error: 'No comment !' });
      }
      res.status(201).json({ comment });
    })
    .catch(error => res.status(500).json({ error }));
};

async function getByIdComment (req, res, next) {
  Comment.findOne({ _id: req.params.id })
  .then(comment => res.status(200).json(comment))
  .catch(error => res.status(404).json({ error }));
};

async function getByNameComment (req, res, next) {
  Comment.find({ username: req.params.username})
  .sort({_id: -1})
  .then(comment => res.status(200).json(comment))
  .catch(error => res.status(404).json({ error }));
};

async function deleteComment (req, res, next) {
  Comment.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Comment deleted !'}))
      .catch(error => res.status(400).json({ error }));
};

/*async function updateComment (req, res, next) {
  Comment.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Comment updated !'}))
    .catch(error => res.status(400).json({ error }));
};*/

async function updateComment (req, res) {
  today = new Date();
  date = today.toLocaleDateString();
  time = today.toLocaleTimeString("fr-FR");
  dateTime = date+'  '+time;
  Comment.findByIdAndUpdate ( req.params.id,
    {$set: { ...req.body}},
    {new: true},
    function (err, editComment){
      if(err) { res.send("error updating comment")}
      else { res.json(editComment)}
    }
  )
}

exports.getComment = getComment;
exports.postComment = postComment;
exports.getLastComment = getLastComment;
exports.get50LastComment = get50LastComment;
exports.getByIdComment = getByIdComment;
exports.deleteComment = deleteComment;
exports.updateComment = updateComment;
exports.getByNameComment = getByNameComment;
