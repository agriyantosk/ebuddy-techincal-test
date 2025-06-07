import { auth } from "@/lib/firebaseClient";
import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export const api = async (path: string, options: RequestInit = {}) => {
  try {
    // const user = auth.currentUser;
    // if (!user) throw new Error("User not authenticated.");

    // const token = await user.getIdToken();
    const token = Cookies.get("firebaseToken");
    console.log(token);

    console.log(`${BASE_URL}/api/${path}`);

    const res = await fetch(`${BASE_URL}/api${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("API error");
    }

    return res.json();
  } catch (error) {
    throw error;
  }
};
