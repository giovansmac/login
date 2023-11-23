import {accountStatus} from './accountStatus'
import Joi from 'joi';

export interface IAccount{
    id?: number,
    name: string,
    email: string,
    password: string,
    status: accountStatus,
    domain: string
}


