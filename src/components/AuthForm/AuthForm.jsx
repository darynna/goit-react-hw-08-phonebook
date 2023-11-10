import { Link } from "react-router-dom";
import { NavRegistration } from "./AuthForm.styled";

export function AuthForm() {
  return (
    <NavRegistration>
      <Link to="/register" exact>
        Sign up
      </Link>
      <Link to="/login" exact>
        Log in
      </Link>
    </NavRegistration>
  );
}