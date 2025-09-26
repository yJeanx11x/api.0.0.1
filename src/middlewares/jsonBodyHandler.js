export async function jsonBodyHandler(req, res) {
    const buffers = [] // Adicionar cada chunk == pedaços

    for await (const chunk of req) { // Coleta os chunks de dados da requisição
        buffers.push(chunk)
        }

        try {
            // Concatenar os chunks e converter para string. Em seguida,converte para Json.
            req.body = JSON.parse(Buffer.concat(buffers).toString())
        } catch (error) {
            req.body= null
        }
        // Define o header de resposta com JSON.
        res.setHeader("Content-Type","application/json")
}