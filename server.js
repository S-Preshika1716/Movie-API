
const express = require('express'); 
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
let movies=[];
let id=1;

app.post("/api",(req,res)=>{
    let m={id:id++,...req.body};
    movies.push(m);
    res.json(m);
});

app.get("/api",(res,req)=>{
    res.json([{
        "title": "inception",
        "director": "Christopher Nolan",
        "genre": "SciFi", "rating": 8.8,
        "durationMinutes": 148, "nowShowing": false
  }])
});

app.put("/api/movies/:id",(req,res)=>{
    let i=movies.findIndex(m=>m.id == index.parsam.id);
    if(m == -1) return res.status(404).json("not found");
    res.json(movies[i]);
});

app.delete("/api/movies/:id",(req,res)=>{
    let i=movies.findIndex(m=>m.id == index.parsam.id);

})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})





    
    
    