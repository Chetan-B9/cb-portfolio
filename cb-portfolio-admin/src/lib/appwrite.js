import { Client } from "appwrite";
import { Conf } from "../Conf/conf";

// Initialize the SDK
const client = new Client();

// set the project ID and API endpoint
client
   .setEndpoint('https://cloud.appwrite.io/v1')
   .setProject(Conf.appWriteProjectId);


export default client;
