const selectAllProdutos = async function() {
    
    const { PrismaClient } = require('@prisma/client')

    const prisma = new PrismaClient()

    let sql = `select cast(id as float) as id, nome, preco, status_promocao, status_favoritos from tbl_produto order by id desc` 

   
    const rsProdutos = await prisma.$queryRawUnsafe(sql)

    if (rsProdutos.length > 0) {
        return rsProdutos
    } else{
        return false
    }
}

const selectAllPizzas = async () => {

    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()

    const sql = `select tbl_produto.nome, tbl_produto.preco, tbl_produto.status_promocao, tbl_produto.status_favoritos, tbl_produto.id from tbl_produto
                inner join tbl_pizza on tbl_produto.id = tbl_pizza.id_produto`

    const rsPizza = await prisma.$queryRawUnsafe(sql)

    if (rsPizza.length > 0) {
        return rsPizza
    } else{
        return false
    }

}

const selectAllBebidas = async () => {

    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()

    const sql = `select tbl_produto.nome, tbl_produto.preco, tbl_produto.status_promocao, tbl_produto.status_favoritos, tbl_produto.id from tbl_produto
                inner join tbl_bebida on tbl_produto.id = tbl_bebida.id_produto`

    const rsBebida = await prisma.$queryRawUnsafe(sql)

    if (rsBebida.length > 0) {
        return rsBebida
    } else{
        return false
    }
}

const selectPizzaById = async (id) => {

    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()

    const sql = `.................. where tbl_pizza.id = ${id}`

    const rsPizza = await prisma.$queryRawUnsafe(sql)

    if(rsPizza.length > 0){
        return rsPizza
    } else{
        return false
    }
}

const selectLastIdProduto = async () => {

    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()

    const sql = `select id from tbl_produto order by id desc limit 1`
    const result = await prisma.$queryRawUnsafe(sql)

    if (result) {
        return result[0].id
    } else{
        return false
    }
}

module.exports = {
    selectAllPizzas,
    selectAllBebidas,
    selectLastIdProduto,
    selectPizzaById,
    selectAllProdutos
}