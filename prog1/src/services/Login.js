const Login = (pass) => {
    if (pass === "secret") {
      return "true"
    }
    return "false"
}

export default Login
