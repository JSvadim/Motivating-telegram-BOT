// local imports
import pool from "../config/database";
import { UserDatabaseI } from "../types/servicesTypes";

export class UserService {
    static async addUser(user: UserDatabaseI) {
        const sqlQuery = "INSERT INTO user (id_user, name, timeDifference) VALUES (?, ?, ?)";
        const sqlParams = [user.id, user.name, user.timeDifference];
        await pool.query(sqlQuery, sqlParams);
    }
}