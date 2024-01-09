import { AutoMap } from "@automapper/classes";
import { IDto } from "./IDto";

export class UserPostDto implements IDto{
    @AutoMap()
    username : string;

    @AutoMap()
    email : string;

    @AutoMap()
    password : string;

    @AutoMap()
    firstName : string;

    @AutoMap()
    lastName : string;

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