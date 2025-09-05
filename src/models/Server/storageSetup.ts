import { storage } from "./config";
import { questionAttachementCollection } from "../name";
import { Permission } from "node-appwrite";

export default async function getOrCreateStorage(){
    try {
        await storage.getBucket(questionAttachementCollection)
        console.log("storage created")
    } catch (error) {
        try {
            // creating bucket

        await storage.createBucket(
            questionAttachementCollection,
            questionAttachementCollection,
            [
                Permission.create("users"),
                Permission.read("users"),
                Permission.read("any"),
                Permission.update("users"),
                Permission.delete("users"),
            ],
            false,
            undefined,
            undefined,
            ["jpg", "jpeg", "png", "gif","webp","heic"]
        );

        console.log("storage created");
        console.log("storage connected");
        } catch (error) {
            console.error(`Error creating storage: ${error}`);
        }
    }
}