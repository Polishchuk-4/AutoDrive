import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signOut,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "../../firebase";

import { thunkApiHandlerError } from "../../components/handlrs/thunkApiHandlerError";

export const registerUserThunk = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, thunkApi) => {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      console.log(user);

      await sendEmailVerification(user);

      return {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        token: user.accessToken,
      };
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        return thunkApi.rejectWithValue({
          status: 400,
          message: "Пошта вже викорисовується",
        });
      }

      return thunkApi.rejectWithValue({
        status: 500,
        message: e.message || "Невідома помилка.",
      });
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkApi) => {
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      return {
        email: user.email,
        uid: user.uid,
        token: user.accessToken,
        emailVerified: user.emailVerified,
      };
    } catch (e) {
      console.log(e);
      return thunkApiHandlerError(e.code, thunkApi);
    }
  }
);

export const logoutUserThunk = createAsyncThunk("auth/logoutUser", async () => {
  const auth = getAuth();
  await signOut(auth);
});
