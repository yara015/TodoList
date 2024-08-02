const express=require("express");
const bodyParser=require("body-parser");

const date=require(__dirname+"/date.js");

const app=express();

const items=[""];
const workItems=[];

app.set("view engine",'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    const day=date.getDate();
    res.render("list",{
        ListTitle:day,
        newListItems:items
    })

})

app.post("/",function(req,res){
    const item=req.body.newItem;

    if(req.body.list==='work'){
        workItems.push(item);
        res.redirect("/work");
    }
    items.push(item);
    res.redirect("/");
})

app.get("/work",function(req,res){
    res.render("list",{
        ListTitle:"WORK LIST",
        newListItems:workItems
    })
})

app.get("/about",function(req,res){
    res.render("about");
})
// app.post("/work",function(req,res){

// })



 app.listen(5000,function(req,res){
    console.log("sever running at 5000");
 })