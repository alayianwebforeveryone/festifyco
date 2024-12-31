const conf  = {
    appWrtieUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.NEXT_PUBLIC_APPWRITE_API_DATABASE_ID),
    appwriteCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_API_COLLECTION_ID),
    appwrtieAvailableEvents: String(process.env.NEXT_PUBLIC_APPWRITE_API_AVAILABLE_EVENTS),
}



export default conf