import { Modal, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";
import { CustomButton } from "../CustomMUI/CustomUI";
import { modalProps } from "../../types";
import useLoginStyles from "../CustomMUI/loginStyle";

const LoggedInModal: React.FC<modalProps> = ({
  openModal,
  userName,
  setOpenModal,
}) => {
  const handleClose = () => setOpenModal(false);
  const { classes } = useLoginStyles();

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
          <h3>Nu är du inloggad</h3>
          <Link href="/" passHref>
            <CustomButton
              color="primary"
              variant="contained"
              onClick={handleClose}
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
