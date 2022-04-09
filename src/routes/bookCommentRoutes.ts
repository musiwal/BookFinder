import { BookComment } from './../controllers/books/bookComment';
import express, { Router } from 'express';

class BookCommentRoutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
    }

    public routes(): Router {
        this.router.post('/comment/book', BookComment.prototype.create);
        this.router.put('/comment/book/:commentId', BookComment.prototype.update);

        return this.router;
    }
}

export const bookCommentRoutes: BookCommentRoutes = new BookCommentRoutes();
