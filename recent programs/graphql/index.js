const express=require('express')
const cors=require('cors')
const {ApolloServer,gql}=require('apollo-server-express')

const app=express()
app.use(cors())
app.use(express.json())

var students=[
    {
        name: "name1",
        course: "MSWD",
        cgpa: 9.5
    },
    {
        name: "name2",
        course: "PFSD",
        cgpa: 9.2
    }
]

var typeDefs=gql`
    type Student{
        name: String!,
        course: String,
        cgpa: Float
    },
    type Query{
        showall: [Student]!,
        count: Int!
    }
`

var resolvers={
    Query: {
        showall: ()=>students,
        count: ()=>students.length
    }
}

async function grapqlfun() {
    var server=new ApolloServer({typeDefs,resolvers})
    await server.start()
    server.applyMiddleware({app})
}
grapqlfun();

app.get('/home',(req,res)=>{ 
    res.send("home page")
})

app.listen(8081)
console.log("server running")