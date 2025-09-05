import { db } from "../name";
import { databases } from "./config";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";

export default async function getOrCreateDb(){
    try {
        await databases.get(db)
        console.log("database connected")
    } catch (error) {
        try {
           await databases.create(db,db)
           console.log("database created")
           await Promise.all ([
               createAnswerCollection(),
               createCommentCollection(),
               createQuestionCollection(),
               createVoteCollection()
           ]);
           console.log("collections created")
           console.log("databases connected")
        } catch (error) {
            console.error(`Error creating database: ${error}`);
        }
    }
}