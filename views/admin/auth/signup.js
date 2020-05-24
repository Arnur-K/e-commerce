const layout = require('../layout');

const getError = (errors, prop) => {
    try {
        return errors.mapped()[prop].msg;
    } catch (error) {
        return ''
    }
}

module.exports = ({ req, errors }) => {
    return layout({
        content: `
            <div>
                <form method="POST">
                    <input name="email" placeholder="email" />
                    ${getError(errors, 'email')}
                    <input name="password" placeholder="password" />
                    ${getError(errors, 'password')}
                    <input name="passwordConfirmation" placeholder="confirm password" />
                    ${getError(errors, 'passwordConfirmation')}
                    <button>Sign up</button>
                </form>
            </div>
        `
    });
};
