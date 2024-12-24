import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("Поле має бути заповнене")
    .min(2, "мінімум 2 символів!")
    .max(20, "Максимум 20 символів!!"),
  email: Yup.string()
    .required("Поле має бути заповнене")
    .email("Недійсний формат електронної пошти"),
  password: Yup.string()
    .required("Поле має бути заповнене")
    .min(6, "мінімум 6 символів!"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Поле має бути заповнене")
    .email("Недійсний формат електронної пошти"),
  password: Yup.string()
    .required("Поле має бути заповнене")
    .min(6, "мінімум 6 символів!"),
});
