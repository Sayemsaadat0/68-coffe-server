# 68-coffe-server
# details notes


setap initial project

1. npm init -y 
2.npm i express cors mongodb dotenv
3.create index.js and send command nodemon index.js to set it on watchmood
4.require dotenv and create foder name .env 
5. to set up these env files = process.env.DB_NAME
start coding
 


## INSERT 

to upload data to the server 
# server site 

# step1
purpose : post the data to the database
1.use app.post()  make sure it is async await

# client site

# step 2
 purpose : send data to the server 
1.use fetch('', {method, headers,body}) 

# step 3
go to  
1.'node mongodb crud' > usage example > insert a document 
2.make a collection inside try{}
3.inside app.post() use insertOne 







as we finished postet data to our database, now we have to show the data to our ui , its called read . and for that we use app.get() details in below - 

# TO SHOW THE DATA TO THE UI 

## FIND
# STEP 1 
# SERVER SITE 
1.app.get() async await must be


# CLIENT SITE 
1.fetch(url) or loader to the route path 
2.make component , map distracture to shaw the data to the ui