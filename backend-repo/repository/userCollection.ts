import db from "../config/firebaseConfig";
import { IUser } from "../entities/user";

const USERS_COLLECTION = "USERS";

export const fetchUserData = async (userId: string): Promise<IUser | null> => {
  const doc = await db.collection(USERS_COLLECTION).doc(userId).get();
  return doc.exists ? ({ uid: doc.id, ...doc.data() } as IUser) : null;
};

export const updateUserData = async (userId: string, data: Partial<IUser>) => {
  await db.collection(USERS_COLLECTION).doc(userId).update(data);
};
