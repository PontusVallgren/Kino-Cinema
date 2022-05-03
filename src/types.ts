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
  showPassword: boolean;
}
export interface ILoggedInContextType {
  isLoggedIn: boolean;
  changeLogInState: (value: boolean) => void;
}

export type LoginProps = {
  newMember: (value: boolean) => void;
};

export interface modalProps {
  openModal: boolean;
  userName: string;
  setOpenModal: (value: boolean) => void;
}
