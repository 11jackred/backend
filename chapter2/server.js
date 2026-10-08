// URL -> http://localhost:5960
//IP -> 127.0.0.1:5960


const express= require('express')
const app = express()
const PORT = 5960


let data=['jamie']



//Middleware
app.use(express.json())

// endpoint - HTTP VERB (method) && Routes (or paths)
//The method informs the nature of request and the route is a further subdirectory (basically we direct the request to the body of code to respond appropriately,and these locations or routes are called endpoints)



//Type 1 -Website endpoints (for sending html when user types a url in browser)


app.get('/',(req,res)=>{

  console.log('User requested the home page website')


  res.send(`
    <body  style="background:pink;color:blue">
    <h1>DATA</h1>
    <p>${JSON.stringify(data)}</p>
    <a href="/dashboard">Dashboard</a>
    </body>
    <script>console.log('this is the script')</script>
    
    `)

})

app.get('/dashboard' , (req , res)=>{
  res.send(`
    <body>
    
    <h>dashboard</h>
     <a href="/">Homepage</a>
    </body>
    
    `)
})

//Type 2- API endpoints (non-visual)

//CRUD-method 
// create-POST read-GET update-PUT delete-DELETE

app.get('/api/data' , (req, res)=>{console.log('this one was for data')

  res.status(596).send(data)

})

app.post('/api/data', (req, res)=>{
  //someone wants to create a user (for example someone clicks sign up button)
  // the user clicks sign up button after putting their credentials and their browser is wired up to send out a network request to the server to handle the action
  const newEntry = req.body
  console.log(newEntry)

  data.push(newEntry.name)

  res.sendStatus(201)
})

app.delete('/api/data', (req, res)=>{
  data.pop()
  console.log('we deleted  the element off the end of the array')
  res.sendStatus(203)
})

app.listen(PORT, ()=>{console.log(`Server has started on: ${PORT}`)} )