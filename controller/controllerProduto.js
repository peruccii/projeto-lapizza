 /*

    Objetivo: Arquivo responsável pela manipulação de dados com o BD (insert, update, delete e select)
    Autor: Eduardo Perucci
    Data de criação: 31/10/22
    Última modificação em: 31/10/22
    Versão: 1.0 

*/



const {MESSAGE_ERROR, MESSAGE_SUCCESS} = require('../modulo/config.js')
const produto = require('../model/DAO/produto.js')


const listarProdutos = async function(){
    let dadosProdutosJSON = {}

    const { selectAllProdutos } = require('../model/DAO/produto.js')

    const dadosProdutos = await selectAllProdutos()

    if (dadosProdutos) {

        /* dadosAlunos.forEach(element => {
            element.id = Number(element.id)
        }); */

        dadosProdutosJSON.produtos = dadosProdutos
        return dadosProdutosJSON
        
    } else{
        return false
    }

}

const listarPizzas = async function(){
let pizzasJSON = {}

//produto = caminho para eu selecionar os selects 
const dados = await produto.selectAllPizzas()

if (dados) {
    pizzasJSON.message = dados
    pizzasJSON.status = 200
} else{
    pizzasJSON.message = MESSAGE_ERROR.NOT_FOUND_DB
    pizzasJSON.status = 404
}

return pizzasJSON

}

const listarBebidas = async function(){
    let bebidasJSON = {}
    
    //produto = caminho para eu selecionar os selects 
    const dados = await produto.selectAllBebidas()
    
    if (dados) {
        bebidasJSON.message = dados
        bebidasJSON.status = 200
    } else{
        bebidasJSON.message = MESSAGE_ERROR.NOT_FOUND_DB
        bebidasJSON.status = 404
    }
    
    return bebidasJSON
    
    }





module.exports = {
    listarProdutos,
    listarPizzas,
    listarBebidas
  
}
