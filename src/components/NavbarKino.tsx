import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import { menuProps } from "../types";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { LoggedInContext } from "./login/IsLoggedIn";
import { CenterBox } from "./CustomMUI/CustomUI";

const NavbarKino: React.FC = () => {
  const { isLoggedIn } = useContext(LoggedInContext);
  const [value, setValue] = useState<number>(0);

  const menus: menuProps[] = [
    {
      menuName: "Hem",
      path: "/",
    },
    {
      menuName: "Filmer",
      path: "/movies",
    },
    {
      menuName: "Kontakta oss",
      path: "/contact",
    },
    {
      menuName: "Logga in",
      path: "/login",
    },
  ];

  const router = useRouter();
  useEffect(() => {
    const path = ["/", "/movies", "/contact", "/login"];
    const currentPath = path.findIndex(
      (menu) =>
        router.pathname === (menu === "/login" && isLoggedIn ? "/mypage" : menu)
    );
    if (currentPath === -1) return;
    setValue(currentPath);
  }, [router]);

  const CustomTab = styled(Tab, {
    shouldForwardProp: (props) => props !== "sx",
  })(() => ({
    fontWeight: "bold",
    fontSize: "16px",
    margin: "0 18px",
    color: "white",
    fontFamily: "Open sans",
    "&:hover": {
      color: "#6373eb",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#6373eb",
      fontWeight: "bold",
    },
  }));
  return (
    <>
      <AppBar
        sx={{ backgroundColor: "#212331", padding: "10px 0" }}
        position="relative"
        elevation={3}
      >
        <Link href="/" passHref>
          <CenterBox>
            <Box sx={{ cursor: "pointer" }}>
              <h1>Risbäck Cinema</h1>
            </Box>
          </CenterBox>
        </Link>
        <Toolbar>
          <Box sx={{ width: "100%" }}>
            <Tabs
              onChange={(e, value) => setValue(value)}
              value={value}
              centered
            >
              {menus.map((menu: menuProps, index) => {
                return (
                  <Link
                    href={`${
                      menu.path === "/login" && isLoggedIn
                        ? "/mypage"
                        : menu.path
                    }`}
                    key={index}
                    passHref
                  >
                    <Box onClick={() => setValue(index)}>
                      <CustomTab
                        label={`${
                          menu.menuName === "Logga in" && isLoggedIn
                            ? "Mina sidor"
                            : menu.menuName
                        }`}
                        className={value === index ? "Mui-selected" : ""}
                      />
                    </Box>
                  </Link>
                );
              })}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavbarKino;
