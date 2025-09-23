import http from 'node:http'
import { buffer } from 'node:stream/consumers'

const server = http.createServer(async(req, res) => {

    const { method, url } = req

    if (method === "GET" && url === '/products') {
        return res.end('Lista De Produtos!')
    }
    else if (method === "POST" && url === '/products') {

        const buffers= []

        for await(const chunk of req){
            buffers.push(chunk)
        }
        console.log(Buffer.concat(buffers).toString())

    }

    return res.writeHead(404).end('Rota não encontrada!')
})
server.listen(3333)