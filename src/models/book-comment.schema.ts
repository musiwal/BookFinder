import mongoose, { model, Model, Schema } from 'mongoose';
import { IBookComment } from '../interfaces/book.interface';

const bookCommentSchema: Schema = new Schema(
    {
        fullname: { type: String, index: true },
        bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', index: true },
        comment: { type: String, default: '' },
        createdAt: { type: Date, default: Date.now }
    }
);

const BookCommentModel: Model<IBookComment> = model<IBookComment>('BookComment', bookCommentSchema, 'BookComment');
export { BookCommentModel };
