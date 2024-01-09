import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { User } from "./entity/User"
import { createMap } from "@automapper/core"
import { Profiles } from "./mapping/Profiles"
import { errorHandler, logger } from "./middleware/errors"
import { ApiResponse } from "./utility/ApiResponse"


AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())
    Profiles.StartProfiles();


    // register express routes from defined application routes
    // Routes.forEach(route => {
    //     (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
    //         const result = (new (route.controller as any))[route.action](req, res, next)
    //         if (result instanceof Promise) {
    //             result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

    //         } else if (result !== null && result !== undefined) {
    //             res.json(result)
    //         }
    //     })
    // })


    function routeHandler(route: any) {
        return async (req: Request, res: Response, next: Function) => {
            try {
                const result = await (new (route.controller as any))[route.action](req, res, next);
                if (result !== null && result !== undefined) {
                    res.send(result);
                }
            } catch (error) {
                next(error); // Hataları global error handler'a iletiyoruz
            }
        };
    }

    Routes.forEach(route => {
        app[route.method](route.route, routeHandler(route));
    });

    app.use((req, res, next) => {
        console.log("Router  çalıştı");
        next();
    });
    

    // setup express app here
   app.use(errorHandler);
   app.use((req, res, next) => {
    console.log("Error handling çalıştı");
    next();
});


    

    // start express server
    app.listen(3000)


    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

});
