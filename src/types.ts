export type menuProps = {
  menuName: string;
  path: string;
};

export type Movie = {
  id: string;
  title: string;
  rating: string;
  coverImg: string;
  backgroundImg: string;
  trailer: string;
  genres: string[];
  length: string;
  age: number;
  description: string;
};

export type DetailsInfo = {
  title: string;
  rating: string;
  genres: string[];
  age: string;
  length: string;
  description: string;
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
  username: string;
  changeLogInState: (value: boolean, username: string) => void;
}

export interface ChildrenProps {
  children: any;
}

export type LoginProps = {
  newMember: (value: boolean) => void;
};

export interface modalProps {
  openModal: boolean;
  userName: string;
  setOpenModal: (value: boolean) => void;
}
