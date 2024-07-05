const fs = require('fs')
const path = require('path')

let arquivoDeConfiguracaoDoServidor = null
try {
    arquivoDeConfiguracaoDoServidor = JSON.parse(fs.readFileSync(path.join(__dirname, '/../config.json'), 'utf-8')) 
} catch(e) {
    console.log(e)
    throw new Error('Erro ao processar o arquivo de configurações do servidor')
}

// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    arquivoDeConfiguracaoDoServidor.nomeBancoDeDados, 
    arquivoDeConfiguracaoDoServidor.usuarioBancoDeDados, 
    arquivoDeConfiguracaoDoServidor.senhaBancoDeDados, {
  host: arquivoDeConfiguracaoDoServidor.hostBancoDeDados,
  dialect: arquivoDeConfiguracaoDoServidor.dialetoBancoDeDados,
});

module.exports = sequelize;
