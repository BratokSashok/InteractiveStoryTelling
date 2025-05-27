import { RegistrationForm } from "../../../features/auth/ui/RegistrationForm";
import "./index.css";

export default function RegistrationPage() {
  return (
    <div className="container">
      <div className="another_container">
      <h1 className="container_h1">Registration</h1>
        <hr />
      <RegistrationForm />
      </div>
    </div>
  )
}