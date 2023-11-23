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
const app_1 = __importDefault(require("../src/app"));
describe('testando rotas de autenticação', () => {
    it('POST /accounts/login - deve retornar 200 e o account', () => __awaiter(void 0, void 0, void 0, function* () {
        const newAccount = {
            id: 1,
            name: "Daniel",
            email: "daniel.emp@gmail.com",
            password: "123456789",
        };
        yield (0, supertest_1.default)(app_1.default)
            .post('/accounts/')
            .send(newAccount);
        const playload = {
            email: "daniel.emp@gmail.com",
            password: "123456789",
        };
        const resultado = yield (0, supertest_1.default)(app_1.default)
            .post('/accounts/login')
            .send(playload);
        expect(resultado.status).toEqual(200);
        expect(resultado.body.auth).toBeTruthy();
        expect(resultado.body.token).toBeTruthy();
    }));
    it('POST /accounts/login - deve retornar 422 e o account', () => __awaiter(void 0, void 0, void 0, function* () {
        const playload = {
            email: "daniel.emp@gmail.com",
            password: "ab",
        };
        const resultado = yield (0, supertest_1.default)(app_1.default)
            .post('/accounts/login')
            .send(playload);
        expect(resultado.status).toEqual(422);
    }));
    it('POST /accounts/login - deve retornar 401 e o account', () => __awaiter(void 0, void 0, void 0, function* () {
        const playload = {
            email: "giovani.emp@gmail.com",
            password: "abc123",
        };
        const resultado = yield (0, supertest_1.default)(app_1.default)
            .post('/accounts/login')
            .send(playload);
        expect(resultado.status).toEqual(401);
    }));
    it('POST /accounts/logout - deve retornar 200 e o account', () => __awaiter(void 0, void 0, void 0, function* () {
        const resultado = yield (0, supertest_1.default)(app_1.default)
            .post('/accounts/logout');
        expect(resultado.status).toEqual(200);
    }));
});
