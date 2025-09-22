import http from 'node:http'

const server = http.createServer((req, res) => {

    // Desestrutura as propriedades "method" (método HTTP) e "url" (rota requisitada) do objeto "req"
    const { method, url } = req

    // Verifica se o método é GET e a rota é "/products"
    if (method === "GET" && url === '/products') {
        // Se for, retorna uma resposta com a lista de produtos
        return res.end('Lista De Produtos!')
    }
    // Caso contrário, verifica se o método é POST e a rota é "/products"
    else if (method === "POST" && url === '/products') {
        // Se for, retorna uma resposta com status 201 (Criado) e confirma o cadastro do produto
        return res.writeHead(201).end('Produto cadastrado !')
    }

    // Se nenhuma das condições acima for atendida, retorna status 404 (Não encontrado)
    return res.writeHead(404).end('Rota não encontrada!')
})
server.listen(3333)