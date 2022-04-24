import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { menuProps } from "../types";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

// export const getServerSideProps: GetServerSideProps = async (
//   context
// ): Promise<isCookieProps> => {
//   const cookies = new Cookies(context.req, context.res);
//   const sessionStr = await cookies.get("session");
//   console.log(sessionStr, "sessionstr");
//   if (sessionStr) {
//     console.log("there is cookie");
//     return {
//       props: {
//         isCookie: true,
//       },
//     };
//   }
//   console.log("there is no cookie");

//   return { props: { isCookie: false } };
// };

// type isCookieProps = {
//   props: {
//     isCookie: boolean;
//   };
// };

const NavbarKino: React.FC = () => {
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
    const currentPath = path.findIndex((menu) => router.pathname === menu);
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
