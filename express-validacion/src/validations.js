function validate(validation) {
    return (req, res, next) => {
        try {
            validation(req.body);

            next();
        } catch (error) {
            next(error);
        }
    };
}

function createUsersValidation(data) {
    const { name, age, email } = data;

    if (typeof name !== 'string') {
        throw new Error('name must be a string');
    }

    if (name.length <= 5) {
        throw new Error('name must be at least 5 characters long');
    }

    if (!/^[a-z]+$/i.test(name)) {
        throw new Error('name must contain only a-z characters');
    }

    // ---

    if (typeof age !== 'number') {
        throw new Error('age must be a number');
    }

    if (age <= 0) {
        throw new Error('age must be greater than 0');
    }

    if (age > 100) {
        throw new Error('age must be less than 100');
    }

    // ---

    if (typeof email !== 'string') {
        throw new Error('email must be a string');
    }

    if (!/^[a-z0-9_.]+@[a-z0-9]+\.[a-z0-9_.]+$/i.test(email)) {
        throw new Error('email must be valid');
    }
}

module.exports = {
    validate,
    createUsersValidation,
};
