export const SET_USER = "SET_USER";
export const UPDATE_USER = "UPDATE_USER";

export const setUser = (payload: UserState) => ({
  type: SET_USER,
  payload,
});

export const updateUser = (payload: Partial<UserState>) => ({
  type: UPDATE_USER,
  payload,
});

// Types
export type UserState = {
  uid: string;
  totalAverageWeightRatings: number;
  numberOfRents: number;
  recentlyActive: number;
};
