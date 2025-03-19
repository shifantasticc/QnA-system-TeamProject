import{db} from "../name"; 
import createAnswerCollection from "./answer.collection"; 
import createCommentCollection from "./comment.collection"; 
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection"; 
import { databases } from "./config"; 
 
export default async function getOrCreateDB() { 
    try{ 
        await databases.get(db) 
        console.log("Database Connection")
    } 
    catch(error){  
        try{ 
            await databases.create(db,db) 
            console.log("Database created")  
            //Create connections
            await Promise.all([ 
                createQuestionCollection(), 
                createAnswerCollection(), 
                createCommentCollection(), 
                createVoteCollection(),
            ]) 
            console.log("Connection created"); 
            console.log("Database Connected")
        } 
        catch(error){ 
            console.log("Error creating databases or collection",error)
        }

    } 
    return databases
    
}