const express=require("express");
const sendMail=require("./app");

const app=express();

let port=5000;

app.get("/",(req,res)=>{
res.send('welcome to the future');
    
});
app.get("/mail",sendMail);
const Start=async()=>{

try{
    app.listen(port,()=>{

        console.log('server is listening at the port of 3000');

    });


}catch(e){

    console.log(e);
}



}
Start();


