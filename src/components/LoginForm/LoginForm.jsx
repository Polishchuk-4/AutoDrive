import style from "./LoginForm.module.css";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../../redux/auth/operations";

import { LoginSchema } from "../../Schemas/Auth";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const onSubmit = (values) => {
    dispatch(loginUserThunk(values))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        toast(e.message, {
          icon: "ℹ️",
          duration: 3000,
        });
      });
    console.log(values);
    reset();
  };

  return (
    <section className={style.formContainer}>
      <h1 className={style.title}>Увійти</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <label className={style.formRow}>
          <input
            {...register("email")}
            className={style.formInput}
            placeholder="Ел. пошта"
          />
          {errors.email && (
            <p className={style.error}>{errors.email.message || "error!!!"}</p>
          )}
        </label>
        <label className={style.formRow}>
          <input
            {...register("password")}
            className={style.formInput}
            placeholder="Пароль"
          />
          {errors.password && (
            <p className={style.error}>
              {errors.password.message || "error!!!"}
            </p>
          )}
        </label>
        <input type="submit" value="Увійти" className={style.submit} />
        <Link to="/register">Створити акаунт</Link>
      </form>
      <Toaster />
    </section>
  );
}
