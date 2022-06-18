const http = require('http')
const fs = require('fs')

const indexPage = fs.readFileSync(`${__dirname}/templates/index.html`)


const server = http.createServer(function(req,res){
    const pathName = req.url
    console.log('url = ',pathName)
    if(pathName==="/" || pathName==="/home"){
        res.end(indexPage)
    }
    else if(pathName==="/product"){
        res.end("<h1>hello product</h1>")
    }
    else{
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }
})
server.listen(8000)