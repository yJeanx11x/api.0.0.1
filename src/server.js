import http from "node:http" // jeito moderno para importa
import {jsonBodyHandler} from "./middlewares/jsonBodyHandler.js"

const server=http.createServer(async(req,res)=>{

const {method,url}=req

await jsonBodyHandler(req,res)

if (method === "GET" && url === "/products"){   
return res.end("Lista De Produtos")
}

if (method === "POST" && url === "/products"){   
    console.log(req.body)
return res.writeHead(201).end(JSON.stringify(req.body))
}

})

server.listen(3333)