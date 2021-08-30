const { MongoClient } = require("mongodb");
const cors = require('cors')
const http = require('http')
const express = require('express')
const app = express()

app.use(express.json())
app.use(cors())

var database, fc;
const uri =
  "mongodb+srv://mongodbroot:mongodbroot@cluster0.75ksr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    database = client.db("myFirstDatabase");
    fc = database.collection("firstCollection");
  } finally {

  }
}
run().catch(console.dir);

app.get('/', (request, response) => {
  response.send('<h1>Hello Cohort2 Part3 SectionC!</h1>')
})

app.get('/api/notes/:dept', (request, response) => {
  const dept = request.params.dept
  const filter = {dept: dept}
  async function fun() {
    try{
    const result = await fc.find(filter).toArray(function (err, docs) { 
      if (err) return res.status(500).send({error: err})
      response.send(docs);
      });
    } finally {

    }
  }
  fun().catch(console.dir)
})

app.get('/notes', (request, response) => {
  async function fun() {
    try{
    const result = await fc.find().toArray(function (err, docs) { 
      if (err) return res.status(500).send({error: err})
      response.send(docs);
      });
    } finally {

    }
  }
  fun().catch(console.dir)
})

const PORT = 8081
app.listen(PORT)
console.log(`Server running on port ${PORT}`)