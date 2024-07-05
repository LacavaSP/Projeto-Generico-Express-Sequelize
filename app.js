const fs = require('fs')
const path = require('path')
const express = require('express')

const servidorHTTPBackend = express()

const arquivoDeConfiguracaoDoServidor = JSON.parse(fs.readFileSync(path.join(__dirname, '/config.json'), 'utf-8')) 
const portaProjeto = arquivoDeConfiguracaoDoServidor.porta
const host = arquivoDeConfiguracaoDoServidor.host

servidorHTTPBackend.listen(portaProjeto, host,() => {
    console.log('Servidor HTTP sendo escutado')
})