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
  userId: string;
  userPassword: string;
}
