import { NextFunction, Request, Response } from "express"
import { ApiResponse } from "../utility/ApiResponse";



export const errorHandler =(err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Hata detayını loglayabilirsiniz.

    // Özel veya genel hata mesajınız
    const errorMessages = [err.message || "Internal Server Error"];

    // ApiResponse sınıfını kullanarak hata yanıtını döndürün
    res.status(err.statusCode || 500).send(ApiResponse.Fail(err.statusCode || 500, errorMessages));

    next();
};


export const logger = (req: Request, res: Response, next: NextFunction) =>{
    console.log("loglandin");

    next();
}
