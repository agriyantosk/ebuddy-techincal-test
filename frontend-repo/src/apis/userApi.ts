import { IUser } from "../../../backend-repo/entities/user";
import { api } from "./api";

export const getUser = () => api(`/users`);
export const updateUser = (data: IUser) =>
  api(`/users`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
