var express = require('express');
var path = require ('path');

var app = express();

var flowers= require("./data/flowers.json")
var customer = require("./data/customers.json")

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req,res){
    res.sendFile("index.html");

});
app.get("/api/flowers",(req,res)=>{
    res.send(flowers);
});

app.get("/api/customers",(req,res)=>{
    res.send(flowers);
});
app.get("/api/flowers/:id",(req,res)=>{
    let id= req.params.id ;
    let flower = flowers.find(x=>x.id==id);
    res.send(flower);
})

app.post("/api/register",(req,res)=>{
    var newCustomer= req.body;
    customers.push(newCustomer);
    res.send("customer registration successful");
})


app.post("/api/flowers",(req,res)=>{
    let newFlower = req.body;
    flowers.push(newFlower)
    res.send("flower resgistration done successfully ")
})

app.delete("/api/flowers/:id",(req,res)=>{
    let id = req.params.id ;
    let remainingFlowers = flowers.filter(f=>f.id!=id);
    flowers=remainingFlowers;
    res.send("flower deleted")
})
console.log("server is listening on port 9898");
app.post("/api/login",(req,res)=>{
    console.log("login successful");
    res.send("login ");
})
app.listen(9898);
