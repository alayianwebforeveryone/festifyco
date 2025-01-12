

import conf from '../../../conf/conf.js';
import { Client, Databases, ID, Permission, Role , Query } from "appwrite";

import authService from './auth.js';

export class CreatedEventsServices {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appWrtieUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
    }



    // Create a new event
    async createEvent({ name, email, city, phone, eventName, duration, date, time, numOfAttendees, chosePlan, moreInfo }) {
        try {
            //Get the logged-in user's ID from authService
            const user = await authService.getCurrentUser(); // Assuming you have a method to get the current user

            const event = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    name,
                    email,
                    city,
                    phone,
                    eventName,
                    duration,
                    date,
                    time,
                    numOfAttendees,
                    chosePlan,
                    moreInfo,
                    creatorUserId: user.$id 
                },
                [
                    Permission.read(Role.user(user.$id)), 
                    Permission.update(Role.user(user.$id)), 
                    Permission.delete(Role.user(user.$id)), 
                ]
            

            );
            return event;
        } catch (error) {
            console.error("EventService :: createEvent() ::", error);
            throw error;
        }
    }


    // Get details of a specific event
    async getEventById(eventId) {
        try {
            const user = await authService.getCurrentUser(); // Get logged-in user ID
            const event = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                eventId
            );

            // Check if the logged-in user is the creator of the event
            if (event.creatorUserId !== user.$id) {
                throw new Error("You are not authorized to view this event.");
            }

            return event;
        } catch (error) {
            console.error("EventService :: getEventById() ::", error);
            throw error;
        }
    }

    // Get all events (optional: filter events by user)
    async getAllEvents() {
        try {
            const user = await authService.getCurrentUser(); 
            console.log("user", user.$id)
            const query = [
                Query.equal('creatorUserId', user.$id) 
            ]; 
    
            const events = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                query 
            );
    
            return events.documents; 
        } catch (error) {
            console.error("EventService :: getAllEvents() ::", error);
            throw error;
        }
    }

    // Update an event
    async updateEvent(eventId, { name, email, phone, city, eventName, duration, date, numOfAttendees, chosenMenu, chosenVenue, moreInfo }) {
        try {
            const user = await authService.getCurrentUser(); // Get logged-in user ID
            const event = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                eventId
            );

            // Check if the logged-in user is the creator of the event
            if (event.creatorUserId !== user.$id) {
                throw new Error("You are not authorized to update this event.");
            }

            // Proceed to update the event
            const updatedEvent = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                eventId,
                {
                    name,
                    email,
                    phone,
                    city,
                    eventName,
                    duration,
                    date,
                    numOfAttendees,
                    chosenMenu,
                    chosenVenue,
                    moreInfo,
                    

                }
            );
            return updatedEvent;
        } catch (error) {
            console.error("EventService :: updateEvent() ::", error);
            throw error;
        }
    }

    // Delete an event
    async deleteEvent(eventId) {
        try {
            const user = await authService.getCurrentUser(); // Get logged-in user ID
            const event = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                eventId
            );

            // Check if the logged-in user is the creator of the event
            if (event.creatorUserId !== user.$id) {
                throw new Error("You are not authorized to delete this event.");
            }

            // Proceed to delete the event
            const result = await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                eventId
            );
            return result;
        } catch (error) {
            console.error("EventService :: deleteEvent() ::", error);
            throw error;
        }
    }
}

// Create an instance of the EventService
const createdEventsServices = new CreatedEventsServices();
export default createdEventsServices;
