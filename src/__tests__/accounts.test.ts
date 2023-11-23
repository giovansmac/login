import request from 'supertest'
import {Response} from 'express';

import app from '../app'


describe('testando rotas', () =>{

    it('GET /accounts/ - deve retornar 200 ', async () =>{
        const resultado = await request(app)
        .get('/accounts/');

        expect(resultado.status).toEqual(200);
        expect(Array.isArray(resultado.body)).toBeTruthy();
   })

    it('POST /accounts/ - deve retornar 201 e o account', async () =>{
        const playload ={
            id: 1,
            name:"Giovani",
            email:"giovani.emp@gmail.com",
            password: "12345789",
        }

        const resultado = await request(app)
        .post('/accounts/')
        .send(playload)

        expect(resultado.status).toEqual(201)
        expect(resultado.body.id).toBe(1);
    })

    it('POST /accounts/ - deve retornar 422 e o account', async () =>{
        const playload ={
            id: 1,
            street:'bangu',
            numero: 1725
        }

        const resultado = await request(app)
        .post('/accounts/')
        .send(playload)

        expect(resultado.status).toEqual(422)
        
    })

    it('PATCH /accounts/:id - deve retornar 200 e o account', async () =>{
        const playload ={
            name:"Daniel",
            email:"daniel.emp@gmail.com",
            password: "1234567898",
        }

        const resultado = await request(app)
        .patch('/accounts/1')
        .send(playload)

        expect(resultado.status).toEqual(200);
        expect(resultado.body.id).toEqual(1);

    })

    it('PATCH /accounts/:id - deve retornar 404 e o account', async () =>{
        const playload ={
            name:"Daniel",
            email:"daniel.emp@gmail.com",
            password: "123456789",
        }

        const resultado = await request(app)
        .patch('/accounts/-1')
        .send(playload)

        expect(resultado.status).toEqual(404)
       
    })

    it('PATCH /accounts/:id - deve retornar 404 e o account', async () =>{
        const playload ={
            name:"Daniel",
            email:"daniel.emp@gmail.com",
            password: "123456789",
        }

        const resultado = await request(app)
        .patch('/accounts/-1')
        .send(playload)

        expect(resultado.status).toEqual(404)
        
    })


    it('GET /accounts/:id - deve retornar 200', async () =>{
    const resultado = await request(app)
    .get('/accounts/1');

    expect(resultado.status).toEqual(200);
    expect(resultado.body.id).toBe(1);
    })

    it('GET /accounts/:id - deve retornar 404', async () =>{
        const resultado = await request(app)
        .get('/accounts/2');
    
        expect(resultado.status).toEqual(404);
        
        })
        it('GET /accounts/:id - deve retornar 400', async () =>{
            const resultado = await request(app)
            .get('/accounts/abc');
        
            expect(resultado.status).toEqual(400);
            
            })

})