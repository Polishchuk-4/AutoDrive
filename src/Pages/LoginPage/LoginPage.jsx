import LoginForm from "../../components/LoginForm/LoginForm";
import style from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <main className={style.main}>
      <LoginForm />
    </main>
  );
}