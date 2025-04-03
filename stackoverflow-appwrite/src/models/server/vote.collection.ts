import{Permission} from "node-appwrite" 
import {db,voteCollection} from "../name" 
import {databases} from "./config"  
export default async function createVoteCollection() { 
    //create collection 
    await databases.createCollection(db,voteCollection,voteCollection,[
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users"),

    ]); 
    console.log("Vote Collection is created");  
         //Creating attributes and indexes 
            await Promise.all([ 
                databases.createEnumAttribute(db,voteCollection,"type",["answer","question"],true),  
                
                databases.createStringAttribute(db,voteCollection,"typeid",50,true),
                databases.createEnumAttribute(db, 
                    voteCollection,
                    "VoteStatus", 
                    ["upvoted","downvoted"], 
                    true
                ),
                databases.createStringAttribute(db,voteCollection,"voteById",50,true),
            ]); 
            console.log("Vote Attribute created"); 
        }
    