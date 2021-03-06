import models from '../../models';

const { Book, Vote, } = models;
/**
 *
 *
 * @export
 * @class VoteController
 */
export default class VoteController {
  /**
   * Votes a book as either upvote or downvote
   *
   * @static
   * @param {any} req
   * @param {any} res
   * @returns {Object} Vote cast success or error
   * @memberof VoteController
   */
  static voteBook(req, res) {
    Book.findOne({
      where: {
        id: req.params.bookId
      }
    }).then((book) => {
      if (book) {
        Vote.findOne({
          where: {
            userId: req.user.id,
            bookId: req.params.bookId
          }
        }).then((vote) => {
          if (vote) {
            if (vote.voteType === req.voteType) {
              res.status(409).json({
                message: `You already ${req.voteType.toLowerCase()}d ${book.title}`
              });
            } else {
              vote.update({ voteType: req.voteType })
                .then(() => {
                  const fieldToIncrement = req.voteType === 'upVote' ? 'upVotes' : 'downVotes';
                  const fieldToDecrement = fieldToIncrement === 'upVotes' ? 'downVotes' : 'upVotes';
                  book.increment(fieldToIncrement);
                  book.decrement(fieldToDecrement);
                  book.reload().then((reloadedBook) => {
                    vote.reload().then(() => {
                      res.status(200).json({
                        message: `You have successfully ${req.voteType.toLowerCase()}d ${book.title}`,
                        book: reloadedBook
                      });
                    });
                  });
                });
            }
          } else {
            Vote.create({
              userId: req.user.id,
              bookId: req.params.bookId,
              voteType: req.voteType
            }).then(() => {
              book.increment(`${req.voteType}s`);
              book.reload().then((reloadedBook) => {
                res.status(201).json({
                  message: `You have successfully ${req.voteType.toLowerCase()}d ${book.title}`,
                  book: reloadedBook
                });
              });
            });
          }
        }).catch((error) => {
          res.status(500).json({
            message: error.message,
          });
        });
      } else {
        res.status(404).json({
          message: `Book with id: ${req.params.bookId} not found`,
        });
      }
    }).catch((error) => {
      res.status(500).json({
        message: error.message,
      });
    });
  }
}
