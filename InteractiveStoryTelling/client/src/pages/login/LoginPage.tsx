import { LoginForm } from "@features/auth/ui/LoginForm";
import "./index.css";

export const LoginPage = () => {
  return (
    <div className="login_container">
      <div className="stuff_container">
        <h1 className="login_h1">Login</h1>
        <hr />
        <LoginForm />
      </div>
    </div>
  );
};