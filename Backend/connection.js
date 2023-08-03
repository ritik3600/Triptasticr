const {MongoClient}=require('mongodb');
const url ="mongodb+srv://vermaritik360:Ritik9812@cluster0.rsluyk1.mongodb.net/triptastic";
const client=new MongoClient(url);
const dbname="allusers";
async function getData()
{
 const result=await client.connect();
 const db=result.db(dbname);
 if(result)
 {
  
    console.log("success");
 }
 return db;
} 
getData();
module.exports = getData;