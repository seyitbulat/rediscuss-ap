import { validate, ValidationError } from "class-validator";
import { IDto } from "../dto/IDto";
import { InvalidFormatError } from "../utility/InvalidFormatError";



export async function validateObject(dto: IDto) {
    const errors = await validate(dto);
    if(errors.length > 0){
        const messages = errors.map(error => Object.values(error.constraints).join(','))
        throw new InvalidFormatError(messages.toString())
    }
}