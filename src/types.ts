export type menuProps = {
  menuName: string;
  path: string;
};

export type Movie = {
  id: number;
  title: string;
  thumbnail: string;
};

export type CustomBtnProps = {
  btnText: string;
  btnPadding: string;
  btnColor:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
};
