"use client";

import { loginUserThunk } from "@/stores/thunks";
import { useState } from "react";
import LoginForm from "@/components/molecules/LoginForm";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/stores/store";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await dispatch(loginUserThunk({ email, password }));
      if (loginUserThunk.fulfilled.match(result)) {
        console.log("Login success:", result.payload);
      } else {
        console.error("Login failed:", result.payload);
      }
    } catch (err) {
      console.error("Dispatch failed:", err);
    }
  };

  return (
    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={handleSubmit}
    />
  );
};

export default Login;
