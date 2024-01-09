import { AutoMap } from "@automapper/classes";

export class UserPostDto{
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
    password : string;
    @AutoMap()
    firstName : string;
    @AutoMap()
    lastName : string;
    @AutoMap()
    phoneNumber : string;
}