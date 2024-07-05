const fs = require('fs')
const path = require('path')
const express = require('express')

const servidorHTTPBackend = express()
let arquivoDeConfiguracaoDoServidor = null
 
try {
    arquivoDeConfiguracaoDoServidor = JSON.parse(fs.readFileSync(path.join(__dirname, '/config.json'), 'utf-8')) 
} catch(e) {
    console.log(e)
    throw new Error('Erro ao processar o arquivo de configurações do servidor')
}
 
const portaProjeto = arquivoDeConfiguracaoDoServidor.porta
const host = arquivoDeConfiguracaoDoServidor.host

servidorHTTPBackend.listen(portaProjeto, host,() => {
    console.log(`Servidor HTTP sendo escutado em http://${host}:${portaProjeto}/` )
})

//SEÇÃO DE BANCO DE DADOS

const conexaoBancoDeDados = require('./db/sequelize.js')

conexaoBancoDeDados.sync({ force: true })
.then(() => {
    console.log('Banco de dados & tabelas criados!');
})
.catch(error => {  
    console.error('Não foi possível conectar-me ao banco de dados:', error);
});
