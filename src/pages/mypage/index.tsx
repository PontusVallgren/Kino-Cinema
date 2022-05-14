import Cookies from 'cookies';
import Iron from '@hapi/iron';
import { GetServerSideProps, NextPage } from 'next';
import React, { useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import {
  CenterHorizon,
  CustomButton,
  CustomText,
} from '../../components/CustomMUI/CustomUI';
import classes from './index.module.css';
import { LoggedInContext } from '../../components/login/IsLoggedIn';
import {
  Avatar,
  Modal,
  Typography,
  ImageList,
  ImageListItem,
  Button,
  ListItemButton,
  ListItemText,
  List,
} from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = new Cookies(context.req, context.res);
  const sessionStr = cookies.get('session');
  const ENC_KEY =
    process.env.ENC_KEY || 'default_key_for_risback_cinema_hello_there';
  if (sessionStr) {
    try {
      const session = await Iron.unseal(sessionStr, ENC_KEY, Iron.defaults);
      if (session.loggedIn) {
        return {
          props: {
            username: session.username,
            firstname: session.firstName,
            lastname: session.lastName,
            loggedIn: session.loggedIn,
            profileImageCookie: session.profileImage,
          },
        };
      }
    } catch (err) {
      //Incorrect enctrypted string
    }
  }

  return {
    notFound: true,
  };
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
type MyPageProps = {
  username: string;
  firstname: string;
  lastname: string;
  loggedIn: boolean;
  profileImageCookie: string;
  handleImageChange: () => void;
};
const MyPage: NextPage<MyPageProps> = ({
  username,
  firstname,
  lastname,
  loggedIn,
  profileImageCookie,
}) => {
  const { isLoggedIn, changeLogInState } = useContext(LoggedInContext);
  const [profileImage, setProfileImage] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    if (profileImageCookie) {
      setProfileImage(profileImageCookie);
    } else {
      setProfileImage('');
    }
  }, []);
  const handleOnClickLogout = async () => {
    Router.push('/');
    changeLogInState(false, username);
    const res = await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  const itemData = [
    {
      img: '/robin.jpg',
      title: 'Robin Björson',
    },
    {
      img: '/sarcastic.jpg',
      title: 'Sarcastic',
    },
    {
      img: '/scott.jpg',
      title: 'Michael Scott',
    },
  ];
  const handleSaveProfile = async () => {
    handleClose();
    const update = await fetch('/api/updateprofilepic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, profileImage }),
    });
  };
  return (
    <div className="main">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
        <CustomButton
          color="error"
          variant="contained"
          onClick={handleOnClickLogout}
        >
          Logga ut
        </CustomButton>
      </Box>
      <CustomText sx={{ textAlign: 'center', paddingTop: 2, paddingBottom: 2 }}>
        Mina Sidor
      </CustomText>
      <CenterHorizon>
        <div className={classes.background}>
          <div className={classes.mainContent}>
            <h2>Profil</h2>
            <Box display="flex" justifyContent="center">
              <Avatar
                src={profileImage}
                sx={{ width: 100, height: 100 }}
                onClick={handleOpen}
              />
            </Box>
            <Modal
              disablePortal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Välj profilbild
                </Typography>
                <ImageList
                  sx={{ width: 500, height: 450 }}
                  cols={3}
                  rowHeight={164}
                >
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <Image
                        width={90}
                        height={100}
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        onClick={() => setProfileImage(item.img)}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
                <Button variant="contained" onClick={handleSaveProfile}>
                  Spara
                </Button>
              </Box>
            </Modal>
            <div className={classes.nameInfo}>
              <label>
                Förnamn
                <Typography variant="h5">{firstname}</Typography>
              </label>
              <label>
                Efternamn
                <Typography variant="h5">{lastname}</Typography>
              </label>
              <label>
                Användarnamn
                <Typography variant="h5">{username}</Typography>
              </label>
            </div>
            <List
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <ListItemButton>
                <ListItemText primary="The Godfather " />
                <ListItemText primary="18.02.2022 09:00" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Idiocracy 18.02.2022 09:00" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="The Batman 18.02.2022 09:00" />
              </ListItemButton>
            </List>
          </div>
        </div>
      </CenterHorizon>
    </div>
  );
};

export default MyPage;
