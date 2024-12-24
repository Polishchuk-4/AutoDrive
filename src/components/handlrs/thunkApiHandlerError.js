export const thunkApiHandlerError = (errorType, thunkApi) => {
  switch (errorType) {
    case "auth/user-not-found":
      return thunkApi.rejectWithValue({
        status: 403,
        message: "Користувача з такою електронною поштою не існує.",
      });
    case "auth/wrong-password":
      return thunkApi.rejectWithValue({
        status: 401,
        message: "Неправильний пароль.",
      });
    case "auth/invalid-email":
      return thunkApi.rejectWithValue({
        status: 400,
        message: "Невірний формат електронної пошти.",
      });
    case "auth/invalid-credential":
      return thunkApi.rejectWithValue({
        status: 400,
        message: "Неправильний формат даних",
      });
    case "auth/too-many-requests":
      return thunkApi.rejectWithValue({
        status: 400,
        message: "Забагато запитів, спробуйте через 10 хвилин.",
      });
    default:
      return thunkApi.rejectWithValue({
        status: 500,
        message: errorType || "Невідома помилка.",
      });
  }
};
