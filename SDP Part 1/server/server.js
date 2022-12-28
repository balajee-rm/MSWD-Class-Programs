const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')

const app = express()
app.use(express.json())
app.use(cors())

const a = (a, b) => {
	a= a+10;
	return a+b;
}

//const a = (a, b) => a+b

/*function add (a,b) {
	a = a+10;
	return a+b;
}*/

//console.log(a(10,20));
//console.log(add(10,20))

app.get('/',(request,response) => {
	response.send('<h1>The b value is '+a(10,20)+'</h1>')
})

const uri = "mongodb+srv://balajee:balajee@cluster0.cjqwipx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
client.connect();
const db = client.db("sdp");
const col = db.collection("user");

app.post('/insert',(request,response) => {
	console.log(request.body)
	col.insertOne(request.body)
	console.log("Documents Inserted");
	response.send(request.body)
})

app.listen(8081)
//localhost:8081
console.log("server started")


