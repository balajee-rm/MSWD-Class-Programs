const { ApolloServer, gql } = require('apollo-server-express');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const { MongoClient } = require("mongodb");
const cors = require('cors')
//var mysql = require('mysql');

var app = express();
app.use(express.json())
app.use(cors())

var temp_dir = path.join(__dirname, 'templates');

app.use(express.static(temp_dir + '/'));
app.use(bodyParser.urlencoded({extended:true}));

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', temp_dir);

app.get('/home', function(req, res){
    res.render('home.html', {user_name: "Balajee"});
});

  /*var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb"
});*/

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table: " + result);
  });
});*/


let persons = [];

var database, fc;
const uri =
  "mongodb+srv://mongodbroot:mongodbroot@cluster0.75ksr.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    database = client.db("myFirstDatabase");
    fc = database.collection("GraphCollection");
    var mysort = { id: 1 };
    const result = await fc.find().sort(mysort).toArray(function (err, docs) { 
      //if (err) return res.status(500).send({error: err})
      persons = docs;
      });
  } finally {

  }
}
run().catch(console.dir);

app.get('/notes', (request, response) => {
  async function fun() {
    try{
    var mysort = { id: 1 };
    const result = await fc.find().sort(mysort).toArray(function (err, docs) { 
      if (err) return res.status(500).send({error: err})
      response.send(docs);
      });
    } finally {

    }
  }
  fun().catch(console.dir)
})

app.post('/notes', (request, response) => {
async function run() {
  try {
    console.log(request.body)
    //let doc = persons;
    const doc = request.body;
    const result = await fc.insertMany(doc);
    console.log(`documents were inserted`);
  } finally {
      response.json(request.body);
  }
}
run().catch(console.dir)
}) 

/*app.put('/notes', (request, response) => {
async function run() {
  try {
    const filter = { name: "name3" };
    const doc = {
      $set: { dept: request.body[0].dept, course: request.body[0].course }, 
    };
    const result = await fc.updateOne(filter, doc);
    console.log(`documents were updated`);
  } finally {
      response.json(request.body);
  }
}
run().catch(console.dir)
})*/

const typeDefs = gql`
  type Person {
    name: String!
    phone: String
    street: String!
    city: String! 
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Person!]!
    findPerson(name: String!): Person
  }
`

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
    findPerson: (root, args) =>
      persons.find(p => p.name === args.name)
  }
}

var server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

var PORT = 8081;

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:8081${server.graphqlPath}`)
)

//app.listen(PORT)

//console.log('Server running at http://127.0.0.1:8082/');