let express =require('express')
let app =express()
let bodyParser=require('body-parser')
let cors=require('cors')
let data=require('./data')

let port=4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.get('/',(req,res)=>
res.send('Hello world')
)

app.get('/products',(req,res)=>
res.json(data.products)
)

app.get('/pretendtoys',(req,res)=>
res.json(data.pretendtoys)
)

app.get('/sciencetoys',(req,res)=>
res.json(data.sciencetoys)
)

app.get('/musicaltoys',(req,res)=>
res.json(data.musicaltoys)
)

app.get('/buildingtoys',(req,res)=>
res.json(data.buildingtoys)
)

app.get('/electronictoys',(req,res)=>
res.json(data.electronictoys)
)
app.post('/users',(req,res)=>
res.json(data.email)
)
app.post('/registeredusers',(req,res)=>
res.json(data.email)
)



app.listen(port)
console.log('api running on '+port +':')