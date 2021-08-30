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
    const filter = { name: "name1" };
    const doc = {
      name: "name4",
      dept: "CSE",
      course: "Adv. Java"
    };
    const result = await fc.replaceOne(filter, doc);
    console.log(`documents were replaced`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);