const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://mongodbroot:mongodbroot@cluster0.75ksr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db("myFirstDatabase");
    const fc = database.collection("firstCollection");
    //const filter = { dept: "Mech" };
    const filter = {};
    const result = await fc.find(filter);
    await result.forEach(console.dir);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);