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
const db = client.db("s1")
const col = db.collection("c207")

app.get('/',(request,response) => {
	response.send('This is a Server')
})

app.post('/insert', (request,response) => {
	col.insertOne(request.body)
	console.log(request.body)
	response.send(request.body)
})

app.get('/check',(req,res)=>{
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

app.listen(8082)
console.log("server started")


