const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const { ObjectId } = require('mongodb');

//middleware

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {

  res.send('Hello World!')
})


// Collection mongodb 
// username mern-book-store
// password Abhibadh123
// mongoDB configurations

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mern-book-store:Abhibadh123@book-store.wozyxyl.mongodb.net/?retryWrites=true&w=majority";

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

    // create collection database
    const booksCollection = client.db("BookInventory").collection("Books");

    // insert book to database :from POST method
    app.post("/upload-book", async (req, res) => {
      const data = req.body
      console.log(data)
      const result = await booksCollection.insertOne(data);
      res.send(result);
      if(result){
        req
      }
    })

    // get all books data from database

    // app.get("/all-books", async(req,res) => {
    //     const books = booksCollection.find();
    //     const result = await books.toArray();
    //     res.send(result);
    // }) 

    // update books collection db : patch / update method
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      // console.log(id);

      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true };
      const updateDoc = {
        $set: { ...updateBookData },
      };

      // update all books collection
      const result = await booksCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    })

    // delete all book collections
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);

      const filter = { _id: new ObjectId(id) };
      const result = await booksCollection.deleteOne(filter);
      res.send(result);
    })

    // find by category
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category }
      }
      const result = await booksCollection.find(query).toArray();
      res.send(result);
    })

    // get single book data
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);

      const filter = { _id: new ObjectId(id) };
      const result = await booksCollection.findOne(filter);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`server on port ${port}`)
})