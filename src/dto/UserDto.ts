import { AutoMap } from "@automapper/classes";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsStrongPassword } from "class-validator";

export class UserPostDto{
    @AutoMap()
    @IsNotEmpty()
    username : string;

    @AutoMap()
    @IsNotEmpty()
    @IsEmail()
    email : string;

    @IsNotEmpty()
    @IsStrongPassword()
    @AutoMap()
    password : string;

    @IsNotEmpty()
    @AutoMap()
    firstName : string;

    @IsNotEmpty()
    @AutoMap()
    lastName : string;

    @IsNotEmpty()
    @IsPhoneNumber()
    @AutoMap()
    phoneNumber : string;
}

export class UserGetDto{
    @AutoMap()
    username : string;
    @AutoMap()
    email : string;

    @AutoMap()
    firstName : string;
    @AutoMap()
    lastName : string;
    @AutoMap()
    phoneNumber : string;
}