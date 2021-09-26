

const Login = () => {
  return (
    <div>
      <span>Login</span>
      <form>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username..."
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
        />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login