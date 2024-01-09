import { createMap } from "@automapper/core";
import { mapper } from "./mapper";

import { User} from "../entity/User";
import { UserGetDto, UserPostDto } from "../dto/UserDto";

export abstract class Profiles{
    public static StartProfiles(){
        createMap(mapper, User, UserGetDto);
        createMap(mapper, UserPostDto, User);
    }
}