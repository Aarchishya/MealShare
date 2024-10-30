import conf from '../conf/conf.js';
import { Client, Databases, ID, Account } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        console.log("Appwrite URL:", conf.appWriteUrl); // Debugging line
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.account = new Account(this.client);
        this.database = new Databases(this.client);
        console.log("URL: ", this.client);
    }

    async createAccount({name, email, password, address, city, role}) {
        try {
            console.log("Creating user account with email:", email);
            const userAccount = await this.account.create(ID.unique(), email, password);
            console.log("User account created:", userAccount); // Log the created user account

            if(userAccount) {
                const userId = userAccount.$id; // Get the generated user ID
                console.log("Generated userId:", userId); // Log the user ID

                // Trim the userId to remove any hidden whitespace
                const trimmedUserId = userId.trim();
                console.log("Trimmed userId:", trimmedUserId);

                // Validate the userId format
                const isValidUserId = /^[a-zA-Z0-9._-]+$/.test(trimmedUserId);
                if (!isValidUserId || trimmedUserId.length > 36) {
                    throw new Error("Invalid userId format.");
                }
                console.log("Creating document with userId:", trimmedUserId); // Log before creating document

                const document = await this.database.createDocument(
                    conf.appWriteDatabaseId,
                    conf.appWriteCollectionId,
                    ID.unique(),
                    {
                        userId: trimmedUserId, // Link this document to the created user
                        name, 
                        email, 
                        password, 
                        address,
                        city,
                        role
                    }
                );

                console.log("User document created:", document); // Log created document
                // Log in immediately after account creation
                console.log("Logging in with email:", email);
                console.log("Logging in with password:", password);
                
                return this.login({email, password});
            }
            else {
                return userAccount;
            }
        } catch (error) {
            console.log("Error creating account:", error);
            throw error;
        }
    }

    async login({email, password}) {
        if (!email || !password) {
            throw new Error("Email and password are required.");
        }
        try {
            return await this.account.createEmailPasswordSession(email, password);
            //return await this.account.createSession(email, password);
            //return await this.account.createEmailSession(email, password);
        }
        catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try{
            return await this.account.get();
        }
        catch (error) {
            throw error;
        }

        return null; 
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        }
        catch (error) {
            throw error; 
        }
    }
}

const authService = new AuthService();

export default authService