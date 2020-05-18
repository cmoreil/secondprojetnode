const Comment = require('../models/comment')

async function postComment (req, res, next) {
  today = new Date();
  date = today.toLocaleDateString();
  time = today.toLocaleTimeString("fr-FR");
  dateTime = date+' '+time;
  const comment = new Comment({
    title: req.body.title.title,
    content: req.body.title.content,
    username : req.body.title.username,
    date: dateTime,
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
