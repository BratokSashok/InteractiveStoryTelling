import { LoginForm } from "@features/auth/ui/LoginForm";
import "./index.css";
import "../pages.css";

export const LoginPage = () => {
  return (
    <div className="container">
      <div className="another_container">
        <h1 className="container-h1">Login</h1>
        <hr />
        <LoginForm />
      </div>
    </div>
  );
};