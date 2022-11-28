

const insertUser = async (user) => {

    try{

    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()

    const sql = `insert into tbl_login(usuario,senha) values(('${user.usuario}'),'${user.senha}')`

    const result = await prisma.$executeRawUnsafe (sql);

    if (result) {
        return true;
    }else
        return false;


}catch (error) {
    return false;
    }
}

const selectUser = async () => {

    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()

    const sql = `select * from tbl_login order by id desc`

    const dados = await prisma.$queryRawUnsafe(sql)

    if (dados.length > 0) {
        return dados
    } else{
        return false
    }
}

module.exports = {
    selectUser,
    insertUser
}