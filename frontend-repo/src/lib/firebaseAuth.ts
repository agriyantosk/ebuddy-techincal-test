import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseClient";
// import Cookies from "js-cookie";

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const token = await userCredential.user.getIdToken();
    return { user: userCredential.user, token };
  } catch (error) {
    console.error("Full Firebase Error:", error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    // Cookies.remove("firebaseToken");
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
