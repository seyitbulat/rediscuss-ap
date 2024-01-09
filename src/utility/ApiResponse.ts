export class ApiResponse<T>{
    Data : T;
    ErrorMessages: string[];
    StatusCode : number;

    private constructor(statusCode: number, data?: T, errorMessages?: string[]){
        this.StatusCode = statusCode;
        this.Data = data;
        this.ErrorMessages = errorMessages;
    }

    public static Success<T>(statusCode: number, data?: T){
        return new ApiResponse<T>(statusCode, data);
    }

    public static Fail<T>(statusCode: number, errorMessages: string[]){
        return new ApiResponse<T>(statusCode, undefined, errorMessages)
    }
}