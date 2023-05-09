/* 
setap initial project
...........................
1. npm init -y 
2.npm i express cors mongodb dotenv
3.create index.js and send command nodemon index.js to set it on watchmood
4.require dotenv and create foder name .env 
5. to set up these env files = process.env.DB_NAME
start coding
*/

// make sure you have managed mongodb roles 

/* 
INSERT ............///////////////////////

to upload data to the server 
server site 
................
step1
purpose : post the data to the database
1.use app.post()  make sure it is async await

client site
................
step 2
 purpose : send data to the server 
1.use fetch('', {method, headers,body}) 
..................
step 3
go to  
1.'node mongodb crud' > usage example > insert a document 
2.make a collection inside try{}
3.inside app.post() use insertOne 

*/


/* 
as we finished postet data to our database, now we have to show the data to our ui , its called read . and for that we use app.get() details in below - 

TO SHOW THE DATA TO THE UI 

FIND....................../////////////
STEP 1 
SERVER SITE 
................... 
1.app.get() async await must be


CLIENT SITE 
1.fetch(url) or loader to the route path 
2.make component , map distracture to shaw the data to the ui 

*/



/* 
# DELETE 

#server site
for the delete action we must need an id 
so here in this process we will use  '/path/:id'  , BCZ WE WANT TO DELETE ONLY ONE ITEM 

1.const query = { _id : new objectId(id)}
2.deleteOne(query)


#Client site > 
1.eventhandler with id parameter 
2.fetch(`${_id}`, {method : 'DELETE'}) 


*/









/* 
# UPDATE
# SERVER 1 to get the data form the client side
to update amy data we use app.get() and findOne(). there will be also the path with an id path 
1. 'path/:id' 
2.findONe() 


# client to send the data to the server 

1.use loader for this time as we need the id so we will get it usings params parameter 
2.update path router 'path/:id'
3.event handler . form onsubmit
3.for updating value we use 'PUT' 



# SERVER 2  update the data which  we have in out database  by reciving from the client side 

1. app.put('path/:id')
2.filter = new objectId(id)
3. const options = {upsert : true}
3. updatedData = req.body 
data = {
    $set : {
        dataName : updatedData.dataName,
        dataName : updatedData.dataName,
        dataName : updatedData.dataName,
        dataName : updatedData.dataName
    }
}
4.updateOnd(filter , options , data )
*/