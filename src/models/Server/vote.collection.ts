import { db,voteCollection } from "../name";
import { databases } from "./config";
import { Permission } from "node-appwrite";

export default async function createVoteCollection(){

    // creating vote collection
    await databases.createCollection(db,voteCollection,voteCollection,[
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users")
    ]);
    console.log("votes collection created");

    // creating vote attributes
    await Promise.all([
        databases.createEnumAttribute(db,voteCollection,"voteStatus",["upVoted","downVoted"],true),
        databases.createStringAttribute(db,voteCollection,"votedById",100,true),
        databases.createEnumAttribute(db,voteCollection,"type",["question","answer"],true),
        databases.createStringAttribute(db,voteCollection,"typeId",100,true)
    ]);
    console.log("vote attributes created");
}