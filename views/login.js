const shell = require('./components/shell')
module.exports = props => shell(`
  <div class="container">
    <div style="flex-direction: row" class="login-container">
      <h3>Login</h3>
      <form
        method="POST"
        action="/api/login"
      >
        <label for="username">Username</label>
        <input type="text" name="username" required/>
        <label for="password">Password</label>
        <input type="password" name="password" required/><br>
        <button class="btn" type="submit">Sign in</button><br>
        <label>Don't have an account? <a href="/register">Register!</a></label>
      </form>
    </div>
  </div>
`, { req: props.req })