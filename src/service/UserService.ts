import { AppDataSource } from "../data-source";
import { UserGetDto, UserPostDto } from "../dto/UserDto";
import { User } from "../entity/User";
import { mapper } from "../mapping/mapper";
import { ApiResponse } from "../utility/ApiResponse";

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
            return "unregistered user"
        }

        const dto = mapper.map(user, User, UserGetDto);
        return ApiResponse.Success(200,user)
    }

    async save(dto : UserPostDto) {
     
        const user = mapper.map(dto, UserPostDto, User);
      
        const newUser = await this.userRepository.save(user)

        const newDto = mapper.map(newUser, User, UserGetDto);

        return ApiResponse.Success(201, newDto);
    }

    async remove(id : any) {

        let userToRemove = await this.userRepository.findOneBy({ id })

        if (!userToRemove) {
            return "this user not exist"
        }

        await this.userRepository.remove(userToRemove)

        return ApiResponse.Success(200);
    }
}