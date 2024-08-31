import { database } from "@/app/config/config";
import clientPromise from "@/lib/mongodb";

const DB_NAME = database.db_name;
const USERS_TABLE = database.users_table;

let db;

export async function initDb() {
    if (!db) {
        try {
            const client = await clientPromise;
            db = client.db(DB_NAME);
        } catch (error) {
            console.error('Failed to initialize DB:', error);
            throw error;
        }
    }
    return db;
}

export async function fetchAllUsers() {
    try {
        const db = await initDb()
        const users = await db.collection(USERS_TABLE).find({}).toArray()
        console.log("users: ",JSON.stringify(users));
        return JSON.parse(JSON.stringify(users));
    } catch (error) {
        console.error('Failed to fetchAllUsers from DB:', error);
    }
}

export async function addUser(user) {
    try {
        const db = await initDb()
        const result = await db.collection(USERS_TABLE).insertOne(user)
        return result;
    } catch (error) {
        console.error('Failed to addUser in DB:', error);
    }
}

