import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { menuProps } from "../types";
import { Box } from "@mui/system";

const NavbarKino = () => {
  const [value, setValue] = useState<number>(0);

  const menus: menuProps[] = [
    {
      menuName: "home",
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
      menuName: "Login",
      path: "/login",
    },
  ];
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
  console.log(value, "value");
  return (
    <>
      <AppBar
        sx={{ backgroundColor: "#212331", padding: "10px 0" }}
        position="sticky"
        elevation={3}
      >
        <Toolbar>
          <Box sx={{ width: "100%" }}>
            <Tabs
              onChange={(e, value) => setValue(value)}
              value={value}
              centered
            >
              {menus.map((menu: menuProps, index) => {
                return (
                  <Link href={`${menu.path}`} key={index} passHref>
                    <Box onClick={() => setValue(index)}>
                      <CustomTab
                        label={`${menu.menuName}`}
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
