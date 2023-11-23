"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('testando rotas', () => {
    it('GET /accounts/ - deve retornar 200 ', () => __awaiter(void 0, void 0, void 0, function* () {
        const resultado = yield (0, supertest_1.default)(app_1.default)
            .get('/accounts/');
        expect(resultado.status).toEqual(200);
        expect(Array.isArray(resultado.body)).toBeTruthy();
    }));
    it('POST /accounts/ - deve retornar 201 e o account', () => __awaiter(void 0, void 0, void 0, function* () {
        const playload = {
            id: 1,
            name: "Giovani",
            email: "giovani.emp@gmail.com",
            password: "12345789",
        };
        const resultado = yield (0, supertest_1.default)(app_1.default)
            .post('/accounts/')
            .send(playload);
        expect(resultado.status).toEqual(201);
        expect(resultado.body.id).toBe(1);
    }));
    it('POST /accounts/ - deve retornar 422 e o account', () => __awaiter(void 0, void 0, void 0, function* () {
        const playload = {
            id: 1,
            street: 'bangu',
            numero: 1725
        };
        const resultado = yield (0, supertest_1.default)(app_1.default)
            .post('/accounts/')
            .send(playload);
        expect(resultado.status).toEqual(422);
    }));
    it('PATCH /accounts/:id - deve retornar 200 e o account', () => __awaiter(void 0, void 0, void 0, function* () {
        const playload = {
            name: "Daniel",
            email: "daniel.emp@gmail.com",
            password: "1234567898",
        };
        const resultado = yield (0, supertest_1.default)(app_1.default)
            .patch('/accounts/1')
            .send(playload);
        expect(resultado.status).toEqual(200);
        expect(resultado.body.id).toEqual(1);
    }));
    it('PATCH /accounts/:id - deve retornar 404 e o account', () => __awaiter(void 0, void 0, void 0, function* () {
        const playload = {
            name: "Daniel",
            email: "daniel.emp@gmail.com",
            password: "123456789",
        };
        const resultado = yield (0, supertest_1.default)(app_1.default)
            .patch('/accounts/-1')
            .send(playload);
        expect(resultado.status).toEqual(404);
    }));
    it('PATCH /accounts/:id - deve retornar 404 e o account', () => __awaiter(void 0, void 0, void 0, function* () {
        const playload = {
            name: "Daniel",
            email: "daniel.emp@gmail.com",
            password: "123456789",
        };
        const resultado = yield (0, supertest_1.default)(app_1.default)
            .patch('/accounts/-1')
            .send(playload);
        expect(resultado.status).toEqual(404);
    }));
    it('GET /accounts/:id - deve retornar 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const resultado = yield (0, supertest_1.default)(app_1.default)
            .get('/accounts/1');
        expect(resultado.status).toEqual(200);
        expect(resultado.body.id).toBe(1);
    }));
    it('GET /accounts/:id - deve retornar 404', () => __awaiter(void 0, void 0, void 0, function* () {
        const resultado = yield (0, supertest_1.default)(app_1.default)
            .get('/accounts/2');
        expect(resultado.status).toEqual(404);
    }));
    it('GET /accounts/:id - deve retornar 400', () => __awaiter(void 0, void 0, void 0, function* () {
        const resultado = yield (0, supertest_1.default)(app_1.default)
            .get('/accounts/abc');
        expect(resultado.status).toEqual(400);
    }));
});
