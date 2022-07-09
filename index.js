const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.get("/",(req,res)=>{
    res.render("index",{fileName : "indexpagestyle.css"});
});
app.get("/about",(req,res)=>{
    res.render("about",{fileName : "aboutpagestyle.css"});
});
app.get("/contact",(req,res)=>{
    res.render("contact", {fileName : "contactpagestyle.css"});
});
app.post("/contact",(req,res)=>{
    res.render("success" ,{fileName : "successpagestyle.css"});
})
app.get("/blog",(req,res)=>{
    res.render("blog" ,{fileName : "blogpagestyle.css"});
});

app.listen(process.env.PORT || 3000 ,()=>{
    console.log("Server is running at port 3000");
})