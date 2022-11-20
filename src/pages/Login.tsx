import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      login with existing user
      <Link to="/signup">or signup</Link>
    </div>
  );
}

export default Login;
