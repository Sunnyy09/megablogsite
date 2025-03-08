import { Client, Databases, ID } from "appwrite";
import config from "../conf/config";

export class ContactService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.databases = new Databases(this.client);
  }

  async createMessage({ name, email, message }) {
    try {
      const response = await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteFeedbackCollectionId,
        ID.unique(),
        { name, email, message }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}

const contactService = new ContactService();
export default contactService;
