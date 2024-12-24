import { useForm } from "react-hook-form";

import style from "./RegisterForm.module.css";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "../../redux/auth/operations";

import { RegisterSchema } from "../../Schemas/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  const onSubmit = (values) => {
    dispatch(registerUserThunk(values))
      .unwrap()
      .then(() => {
        toast(`На пошту ${values.email} надіслано лист верифікації`, {
          icon: "ℹ️",
          duration: 3000,
        });
        navigate("/login");
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
      <h1 className={style.title}> Реєстрація</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <label className={style.formRow}>
          <input
            {...register("name")}
            className={style.formInput}
            placeholder="Імя"
          />
          {errors.name && (
            <p className={style.error}>{errors.name.message || "error!!!"}</p>
          )}
        </label>
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
        <input type="submit" value="Зареєструватися" className={style.submit} />
        <p>
          Ви вже маєте акаунт? <Link to="/login">Увійти</Link>
        </p>
      </form>
      <Toaster />
    </section>
  );
}
