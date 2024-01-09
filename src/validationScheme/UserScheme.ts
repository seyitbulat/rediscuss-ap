import Joi = require("joi");

const userSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phoneNumber: Joi.string().required() 
});


export function validateUser(user: any) {
    const result = userSchema.validate(user);
    if (result.error) {
        throw new Error(result.error.details[0].message);
    }
    return result.value;
}
