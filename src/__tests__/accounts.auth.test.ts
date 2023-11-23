import request from 'supertest';
import app from '../app';

describe('testando rotas de autenticação', () =>{
    it('POST /accounts/login - deve retornar 200 e o account', async () => {

        const newAccount ={
            id: 1,
            name:"Daniel",
            email:"daniel.emp@gmail.com",
            password: "123456789",
        }

         await request(app)
        .post('/accounts/')
        .send(newAccount)

        const playload ={
            email:"daniel.emp@gmail.com",
            password: "123456789",
        }

        const resultado = await request(app)
        .post('/accounts/login')
        .send(playload)

        expect(resultado.status).toEqual(200);
        expect(resultado.body.auth).toBeTruthy();
        expect(resultado.body.token).toBeTruthy();
    })

it('POST /accounts/login - deve retornar 422 e o account', async () => {
    const playload ={
        email:"daniel.emp@gmail.com",
        password: "ab",
    }
    
    const resultado = await request(app)
    .post('/accounts/login')
    .send(playload)

    expect(resultado.status).toEqual(422);
})

it('POST /accounts/login - deve retornar 401 e o account', async () => {
    const playload ={
        email:"giovani.emp@gmail.com",
        password: "abc123",
    }
    
    const resultado = await request(app)
    .post('/accounts/login')
    .send(playload)

    expect(resultado.status).toEqual(401);
})

it('POST /accounts/logout - deve retornar 200 e o account', async () => {
    const resultado = await request(app)
    .post('/accounts/logout');
    
    expect (resultado.status).toEqual(200);
})
})
