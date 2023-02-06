const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const { request, response } = require('express')

const app = express()
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://admin:admin@cluster0.cjqwipx.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)
client.connect()
var db = client.db("s1")
var col = db.collection("c207")

app.get('/',(request,response) => {
	response.send('This is a Server')
})

app.post('/insert', (request,response) => {
	col = db.collection("c207")
	console.log(request.body)
	col.insertOne(request.body)
	response.send(request.body)
})

app.get('/check',(req,res)=>{
	col = db.collection("c207")
	console.log(req.query)
	async function find(){
		try{
			const result=await col.findOne({email:req.query.un})
			console.log(result)
			if(result == null)
			{
				res.send("FAIL")
			}
			else{
				if(req.query.pw === result.pw)
				{
					res.send("PASS")
				}
				else
				{
					res.send("FAIL")
				}

			}
		}
		finally{}	
	}
	find().catch(console.dir)
})

app.post('/insert_stu',(req, res)=>{
	col = db.collection("stu_data")
	console.log(req.body)
	col.insertOne(req.body)
	res.send(req.body)
})

app.get('/show_one_stu', (req, res)=>{
	col = db.collection("stu_data")
	console.log(req.query)
	async function find(){
		try{
			const result=await col.findOne()
			console.log(result)
			if(result == null)
			{
				res.send({"Data_Retrieval":"Fail"})
			}
			else{
				res.send(result)
			}
		}
		finally{}	
	}
	find().catch(console.dir)	
})

app.get('/show_all', (req, res)=>{
	col = db.collection("stu_data")
	console.log(req.query)
	async function find(){
		try{
			const result=await col.find().toArray()
			console.log(result)
			if(result == null)
			{
				res.send({"Data_Retrieval":"Fail"})
			}
			else{
				res.send(result)
			}
		}
		finally{}	
	}
	find().catch(console.dir)	
})

app.listen(8082)
console.log("server started")


