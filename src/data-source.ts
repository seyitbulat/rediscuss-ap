import "reflect-metadata"
import { DataSource } from "typeorm"
import { Friendship } from "./entity/Friendship"
import { Role } from "./entity/Role"
import { User } from "./entity/User"
import { UserRole } from "./entity/UserRole"

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    username: "sa",
    password: "cikolat.3",
    database: "rediscussDb",
    synchronize: true,
    logging: false,
    entities: [Friendship, Role, User, UserRole],
    migrations: [],
    subscribers: [],
    options: {
        trustServerCertificate: true
    }
})
