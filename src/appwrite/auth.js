import conf from '../conf/conf.js'

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appWrtieUrl)
            .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    }

    //   this is for signup
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({ email, password })
            }
            else {
                return userAccount
            }

        } catch (error) {
            throw error
        }


    }
    // this is for login
    async login({ email, password }) {

        try {
            return await this.account.createSession(email, password)


        } catch (error) {
            throw error
        }

    }
    // this is for to check the status of current user
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: get currentUser() ::", error)
        }
        return null
    }
    // this is for logout
    async logout({ }) {
        try {
            return await this.account.deleteSessions()
        }
        catch (error) {
            console.log("Appwrite service :: get currentUser() ::", error)
        }
    }


}
const authService = new AuthService()
export default authService



