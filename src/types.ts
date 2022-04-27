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

export interface userAccountProps {
  userId: string;
  userPassword: string;
}
