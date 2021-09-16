const express = require("express")
const url = require("url")



const PORT = process.env.PORT || 3000
const app = express()


async function start(){
    try{
        app.listen(PORT, ()=>{
            console.log("server ok...")
        })
    }catch(e){
        console.log(e)
    }
}
start()

app.get('/download', function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.download(`${__dirname}/./ajax_test.json`); 
});
  

app.get('/hello', (req, res) => {
    
    const queryObject = url.parse(req.url,true).query;
    console.log(queryObject);
    // console.log(req)
    console.log(`hello ${__dirname}`)
    res.send(`hello ${queryObject.name} ${queryObject.wife}`)
  })

