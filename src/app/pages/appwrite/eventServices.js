import conf from '../../../conf/conf.js';
import { Client, Databases, ID } from "appwrite";

export class AvallableEvents {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appWrtieUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
    }

    // Create a new event
    async createEvent({ name, email, phone, city, eventName, duration, date, numOfAttendees, chosenMenu, chosenVenue, moreInfo }) {
        try {
            const event = await this.databases.createDocument(
                conf.databaseId,
                conf.eventsCollectionId,
                ID.unique(),
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
            return event;
        } catch (error) {
            console.error("EventService :: createEvent() ::", error);
            throw error;
        }
    }

    // Get details of a specific event
    async getEventById(eventId) {
        try {
            const event = await this.databases.getDocument(
                conf.databaseId,
                conf.eventsCollectionId,
                eventId
            );
            return event;
        } catch (error) {
            console.error("EventService :: getEventById() ::", error);
            throw error;
        }
    }

    // Get all events
    async getAllEvents() {
        try {
            const events = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId
            );
            return events.documents; // Array of event documents
        } catch (error) {
            console.error("EventService :: getAllEvents() ::", error);
            throw error;
        }
    }

    // Update an event
    async updateEvent(eventId, { name, email, phone, city, eventName, duration, date, numOfAttendees, chosenMenu, chosenVenue, moreInfo }) {
        try {
            const updatedEvent = await this.databases.updateDocument(
                conf.databaseId,
                conf.eventsCollectionId,
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
            const result = await this.databases.deleteDocument(
                conf.databaseId,
                conf.eventsCollectionId,
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
const availableEvents = new AvallableEvents();
export default availableEvents;
