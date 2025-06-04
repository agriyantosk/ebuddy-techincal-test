import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseClient";

export const login = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const token = await userCredential.user.getIdToken();
  return { user: userCredential.user, token };
};
