const layout = require('../layout');

module.exports = () => {
    return layout({
        content: `
            <div>
                <form method="POST">
                    <input type="email" name="email" placeholder="email" />
                    <input type="password" name="password" placeholder="password" />
                    <button>Sign in</button>
                </form>
            </div>
        `
    });
};