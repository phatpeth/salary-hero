export interface IProfile {
  uid: string;
  email: string;
  firstname: string;
  lastname: string;
}

export interface IAuthProfile extends IProfile {
  token: string;
}

export type TTransaction = {
  uid: number;
  amount: number;
  date: string;
};
