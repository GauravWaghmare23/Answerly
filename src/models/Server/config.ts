import env from "@/app/env";
import { Client, Databases, Avatars, Users, Storage } from "node-appwrite";

const client = new Client()
  .setEndpoint(env.appwrite.endpoint)
  .setProject(env.appwrite.projectId)
  .setKey(env.appwrite.apiKey);

const databases = new Databases(client);
const avatars = new Avatars(client);
const users = new Users(client);
const storage = new Storage(client);

export { client, databases, avatars, users, storage };
