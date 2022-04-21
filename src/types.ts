export type menuProps = {
  menuName: string;
  path: string;
};

export type Movie = {
  id: string;
  title: string;
  coverImg: string;
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
