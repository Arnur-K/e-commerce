const layout = require('../layout');

module.exports = ({ req }) => {
    return layout({
        content: `
            <div>
                <form method="POST">
                    <input type="email" name="email" placeholder="email" />
                    <input type="password" name="password" placeholder="password" />
                    <input type="password" name="passwordConfirmation" placeholder="confirm password" />
                    <button>Sign up</button>
                </form>
            </div>
        `
    });
};
