import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source";
import { User } from "../entity/User"
import { UserService } from "../service/UserService"
import { BadRequestError } from "../utility/badRequestError";
import { NotFoundError } from "../utility/NotFoundError";

export class UserController {

    private userService = new UserService();

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userService.all();
    }

    async one(request: Request, response: Response, next: NextFunction){
        const id = request.params.id;
        return this.userService.one(id);
    }

    async save(request: Request, response: Response, next: NextFunction){
        const body = request.body;

        return this.userService.save(body);
    }

}
