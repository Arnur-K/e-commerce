module.exports = ({ req }) => {
  return `
        <div>
            ${req.session.userId}
            <form method="POST">
                <input type="email" name="email" placeholder="email" />
                <input type="password" name="password" placeholder="password" />
                <input type="password" name="passwordConfirmation" placeholder="confirm password" />
                <button>Sign up</button>
            </form>
        </div>
    `;
};
