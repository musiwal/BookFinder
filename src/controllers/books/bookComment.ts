import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';

import { BookModel } from '../../models/book.schema';
import { BookCommentModel } from '../../models/book-comment.schema';

export class BookComment {
    public async create(req: Request, res: Response): Promise<void> {
        let { bookId, rating, comment } = req.body;
        let bookComment;
        let bookRating;
        let message = '';
        if (rating) {
            bookRating = BookModel.updateOne({_id: bookId }, { $inc: { rating: rating } });
            message = 'Rating added';
        }
        if (comment) {
            bookComment = BookCommentModel.create({
                bookId,
                comment,
                fullname: req.currentUser!.fullname,
            });
            message = 'Comment added';
        }
        const updatedBook = BookModel.findOne({_id: bookId });
        const [book] = await Promise.all([bookRating, bookComment, updatedBook]);
        res.status(HTTP_STATUS.CREATED).json({ message: message, book });
    }

    public async update(req: Request, res: Response): Promise<void> {
        let { comment } = req.body;
        const bookComment = await BookCommentModel.findOneAndUpdate({ _id: req.params.commentId }, { comment: comment }, { new: true, upsert: true });
        res.status(HTTP_STATUS.CREATED).json({ message: 'Comment updated', book: bookComment });
    }
}