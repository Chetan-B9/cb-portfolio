export const Conf = {
   appWriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
   appWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
   appWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
   apoWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
   appWriteThumbnailsBucketId: String(import.meta.env.VITE_APPWRITE_THAMBNAILS_BUCKET_ID),
   appWriteScreenshotsBucketId: String(import.meta.env.VITE_APPWRITE_SCREENSHOTS_BUCKET_ID)
}