import { Book } from './../controllers/books/book';
import express, { Router } from 'express';

class BookRoutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
    }

    public routes(): Router {
        this.router.get('/books/:page', Book.prototype.all);
        this.router.get('/book/:bookId', Book.prototype.single);
        this.router.get('/book/:query', Book.prototype.search);
        this.router.post('/book/add', Book.prototype.create); // this is the route for adding books to db from json file
        this.router.put('/book/rating/:bookId', Book.prototype.updateRating);

        return this.router;
    }
}

export const bookRoutes: BookRoutes = new BookRoutes();
