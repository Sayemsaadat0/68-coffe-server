// requiring important things
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 6969 ;


//  middleaware 
app.use(cors())
app.use(express.json())





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.njebycd.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
   
    const coffeCollection = client.db("coffeDB").collection('coffe');

    // to read the data 
    app.get('/coffe', async(req, res)=>{
      const cursor  = coffeCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })
  
    
    //post - upload data to the database 
    app.post('/coffe', async(req, res)=>{
        const newCoffe = req.body 
        console.log(newCoffe)
        const result = await coffeCollection.insertOne(newCoffe)
        res.send(result)
    }) 

    // delete data form the database
    app.delete('/coffe/:id' , async(req, res)=>{
      const id = req.params.id 
      const query = { _id : new ObjectId(id)}
      const result = await coffeCollection.deleteOne(query)
      res.send(result)
    })


    // update the data  1 
    app.get('/coffe/:id', async(req, res)=>{
      const id = req.params.id 
      const query = {_id : new ObjectId(id)}
      const result = await coffeCollection.findOne(query)
      res.send(result)
    })

   /*  app.put('/coffe/:id', async(req , res)=>{
      const id = req.params.id 
      const filter = {_id : new ObjectId(id)}
      const options = { upsert : true} ;
      const updatedCoffe = req.body ;
      const coffeData = {
        $set : {
              name : updatedCoffe.name,
            quantiy: updatedCoffe.quantiy,
             taste: updatedCoffe.taste,
         suplier: updatedCoffe.suplier,
           details: updatedCoffe.details,
            category: updatedCoffe.category,
             photo: updatedCoffe.photo

        }
      }
      const result = await coffeCollection.updateOne(filter,options,coffeData)
      res.send(result)
    }) */





    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



// route server path 
app.get('/' , (req, res)=>{
    res.send('coffe server is running')
})








// listen
app.listen(port,()=>{
    console.log(`cofee at the port of : ${port}`)
})