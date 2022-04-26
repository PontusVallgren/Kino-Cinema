export type menuProps = {
  menuName: string;
  path: string;
};

export type Movie = {
  id: string;
  title: string;
  rating: string;
  coverImg: string;
};

export interface userAccountProps {
  username: string;
  userpassword: string;
  firstName: string;
  lastName: string;
}

export interface visiblePasswordState {
  password: string;

  showPassword: boolean;
}
