import { Permission } from "node-appwrite";
import { db, commentCollection } from "../name";
import { databases } from "./config";

export default async function createCommentCollection() {
  // creating collection
  await databases.createCollection(db, commentCollection, commentCollection, [
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);
  console.log("comments collection created");

  //creating comment attributes
  await Promise.all([
    databases.createStringAttribute(
      db,
      commentCollection,
      "content",
      1000,
      true
    ),
    databases.createEnumAttribute(
      db,
      commentCollection,
      "type",
      ["answer", "question"],
      true
    ),
    databases.createStringAttribute(db, commentCollection, "typeId", 100, true),
    databases.createStringAttribute(
      db,
      commentCollection,
      "authorId",
      100,
      true
    ),
  ]);
  console.log("comments attribute created");
}
