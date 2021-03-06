const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const app=express();



app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));


const mongo=require("mongodb").MongoClient;
const url="mongodb+srv://admin_Abesh:PlGWD1AsxDkSvF18@cluster0.fpqk3.mongodb.net?retryWrites=true&w=majority";


mongo.connect(url,{ useUnifiedTopology: true },(error,db)=>{
  
  if(error){
    console.log(error);
  }
  else{
   const dbo=db.db("blog");
  const col=dbo.collection("blog_col");
//all api methods 
  
  app.post("/post",(req,res)=>{
    
    col.insertOne(req.body,(err)=>{
      if(err){
        console.log(err);
      }
      else{
        console.log("posted");
      }
    });
    
  });
  
  
  
app.get("/feed",(req,res)=>{
    
    col.find({}).toArray((err,result)=>{
      
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    });
    
  });
  
app.delete("/del/:i",(req,res)=>{
    const i={i:req.params["i"]};
    col.deleteOne(i,(err)=>{
      if(err){
        console.log(err);
      }
      else{
        console.log("deleted");
      }
    });
});

app.get("/feedone/:i",(req,res)=>{
  const i={i:req.params["i"]};
col.findOne(i,(err,result)=>{
  if(err){
    console.log(err);
  }
  else{
    res.send(result);
  }
});
  
  
});

  
  

 
 //all api methods close
  
app.listen(8000,(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("success");
  }
});


  }
});

