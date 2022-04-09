import express, { Router } from 'express';
import { Auth } from './../controllers/users/auth';

class AuthRoutes {
    private router: Router;

    constructor() {
        this.router = express.Router();
    }

    public routes(): Router {
        this.router.get('/auth/signout', Auth.prototype.update);
        this.router.post('/auth/signup', Auth.prototype.create);
        this.router.post('/auth/signin', Auth.prototype.read);

        return this.router;
    }
}

export const authRoutes: AuthRoutes = new AuthRoutes();
