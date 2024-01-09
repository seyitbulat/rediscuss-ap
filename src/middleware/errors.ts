import { NextFunction, Request, Response } from "express"
import { ApiResponse } from "../utility/ApiResponse";
import { BadRequestError } from "../utility/badRequestError";



export const errorHandler =(err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Hata detayını loglayabilirsiniz.

    let statusCode : number;

    // Özel veya genel hata mesajınız
    const errorMessages = [err.message || "Internal Server Error"];


    switch (err.name) {
        case "BadRequestError":
            statusCode = 400;
            break;
        case "NotFoundError":
            statusCode = 404;
            break;
            case "InvalidFormatError":
                statusCode = 401;
                break;
        default:
            statusCode = 500;
            break;
    }

    // ApiResponse sınıfını kullanarak hata yanıtını döndürün
    res.status(statusCode).send(ApiResponse.Fail(statusCode, errorMessages));
};


export const logger = (req: Request, res: Response, next: NextFunction) =>{
    console.log("loglandin");

    next();
}
