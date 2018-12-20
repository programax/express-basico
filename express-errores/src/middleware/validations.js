const yup = require('yup');
const ValidationError = require('../errors/validationError');

function validate(validation) {
    return (req, res, next) => {
        try {
            validation(req.body);

            next();
        } catch (error) {
            next(new ValidationError(error));
        }
    };
}

function createUsersValidation(data) {
    const schema = yup.object().shape({
        name: yup.string().min(5).matches(/^[a-z]+$/).required(),
        age: yup.number().min(1).max(100).integer().required(),
        email: yup.string().matches(/^[a-z0-9_.]+@[a-z0-9]+\.[a-z0-9_.]+$/).required(),
    });

    schema.validateSync(data);
}

module.exports = {
    validate,
    createUsersValidation,
};
