import { RegistrationForm } from "../../../features/auth/ui/RegistrationForm";
import "./index.css";

export default function RegistrationPage() {
  return (
    <div className="reg_container">
      <div className="stuff_container">
      <h1 className="reg_h1">Registration</h1>
        <hr />
      <RegistrationForm />
      </div>
    </div>
  )
}