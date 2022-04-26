import { Modal, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import classes from "../../pages/login/index.module.css";
import Link from "next/link";
import { CustomButton } from "../CustomMUI/CustomUI";
import { LoggedInContext } from "./IsLoggedIn";
import { modalProps } from "../../types";

const LoggedInModal: React.FC<modalProps> = ({
  openModal,
  userName,
  setOpenModal,
}) => {
  const { changeLogInState } = useContext(LoggedInContext);
  const handleClose = () => setOpenModal(false);

  return (
    <Modal open={openModal} aria-labelledby="modal" aria-describedby="loggedin">
      <Box className={classes.loggedIn}>
        <Box className={classes.logAlarm}>
          <Zoom in={true} style={{ transitionDelay: "320ms" }}>
            <CheckCircleIcon
              className={classes.loggedInIcon}
              color="secondary"
            />
          </Zoom>
          <h1>{`Välkommen ${userName}!`}</h1>
          <h3>Nu är du loggad</h3>
          <Link href="/" passHref>
            <CustomButton
              color="primary"
              variant="contained"
              onClick={() => {
                handleClose();
                changeLogInState();
              }}
              className={classes.loggedInBtn}
            >
              Till startsidan
            </CustomButton>
          </Link>
        </Box>
      </Box>
    </Modal>
  );
};

export default LoggedInModal;
