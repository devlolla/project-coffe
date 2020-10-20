const connection = require('../database/connection')

module.exports = {
    async index (require, response) {
        const pedidos = await connection ('register').select('*');

        return response.json(pedidos);
    },

    async create (require, response) {
        const {nome, opcao, acompanhamento} = require.body;

        await connection('register').insert({
            nome,
            opcao,
            acompanhamento
        })
    }
}