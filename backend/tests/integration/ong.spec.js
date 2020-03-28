const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');


describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('Se é possível criar uma nova ONG no banco de dados', async () => {
        const response = await request(app).post('/ongs').send({
            name: "Quatro Patas",
            email: "contato@4patas.com.br",
            whatsapp: "81991347268",
            city: "Caruaru",
            uf: "PE"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);



        console.log(response.body);
    })
})