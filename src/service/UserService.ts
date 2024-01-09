import { AppDataSource } from "../data-source";
import { UserGetDto, UserPostDto } from "../dto/UserDto";
import { User } from "../entity/User";
import { mapper } from "../mapping/mapper";
import { ApiResponse } from "../utility/ApiResponse";
import { BadRequestError } from "../utility/badRequestError";
import { NotFoundError } from "../utility/NotFoundError";

export class UserService{
    private userRepository = AppDataSource.getRepository(User);

    async all(){
        const users = await this.userRepository.find();
        const dto = await mapper.mapArray(users, User, UserGetDto);
        return ApiResponse.Success<UserGetDto[]>(200,dto);
    }

    async one(id : any){
        const user = await this.userRepository.findOne({
            where: {id}
        }) 
        
        if (!user) {
            throw new NotFoundError("unregistered user");
        }

        const dto = mapper.map(user, User, UserGetDto);
        return ApiResponse.Success(200,dto)
    }

    async save(dto : UserPostDto) {
     
        if(dto == null){
            throw new BadRequestError("dto is not full");
        }
        const user = mapper.map(dto, UserPostDto, User);
      
        const newUser = await this.userRepository.save(user)

        const newDto = mapper.map(newUser, User, UserGetDto);

        return ApiResponse.Success(201, newDto);
    }

    async remove(id : any) {

        let userToRemove = await this.userRepository.findOneBy({ id })

        if (!userToRemove) {
            throw new NotFoundError("this user not exist");
        }

        await this.userRepository.remove(userToRemove)

        return ApiResponse.Success(200);
    }
}