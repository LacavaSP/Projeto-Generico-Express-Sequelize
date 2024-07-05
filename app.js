const express = require('express')
const portaProjeto = 6061
const servidorHTTPBackend = express()

servidorHTTPBackend.listen(portaProjeto, () => {
    console.log('Servidor HTTP sendo escutado')
})