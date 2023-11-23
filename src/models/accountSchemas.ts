
import Joi from 'joi';
const accountSchema = Joi.object({
    id: Joi.number()
           .integer()
           .min(1),
    name: Joi.string()
            .min(3)
            .max(150)
            .required(),
    email: Joi.string()
              .email()
              .required()
              .min(6)
              .max(50),
        password: Joi.string()
                .min(3)
                .max(150)
                .required(),
        status: Joi.number()
        .integer()
        .min(3)
        .max(150),
        domain: Joi.string()
              .min(6)
              .max(150),

}) 

const loginSchema = Joi.object({
    email: Joi.string()
    .email()
    .min(8)
    .max(150)
    .required(),
password: Joi.string()
      .min(3)
      .max(50)
      .required(),

})
const accountUpdateSchema = Joi.object({
         name: Joi.string()
                .min(3)
                .max(150),
        password: Joi.string()
                .min(3)
                .max(150),
        status: Joi.number()
               .integer()
               .min(3)
               .max(150),
        domain: Joi.string()
               .min(6)
               .max(150),

}) 

export {accountSchema, loginSchema, accountUpdateSchema}