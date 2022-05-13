import Cookies from 'cookies';
import Iron from '@hapi/iron';
import { GetServerSideProps, NextPage } from 'next';
import React, { useContext, useState } from 'react';
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
} from '@mui/material';
import ProfilePicChanger from '../../components/myPage/ProfilePicChanger';
import { Box } from '@mui/system';
import { userAccounts } from '../../server/models';
import { userAccountSchema } from '../../server/schema';
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
  handleImageChange: () => void;
};
const MyPage: NextPage<MyPageProps> = ({
  username,
  firstname,
  lastname,
  loggedIn,
}) => {
  const { isLoggedIn, changeLogInState } = useContext(LoggedInContext);
  const [profileImage, setProfileImage] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  const handleImageChange = (profileImage: string) => {
    setProfileImage(profileImage);
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
    // TODO: Save profilepic to DB
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
      <CustomButton
        color="error"
        variant="contained"
        onClick={handleOnClickLogout}
      >
        Logga ut
      </CustomButton>
      <CustomText>Mina Sidor</CustomText>
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
              {/*   <ProfilePicChanger
                handleImageChange={handleImageChange}
                pic1={'/robin.jpg'}
                pic2={'/sarcastic.jpg'}
                pic3={'/scott'}
              /> */}
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
                      <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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
                <h4>{firstname}</h4>
              </label>
              <label>
                Efternamn
                <h4>{lastname}</h4>
              </label>
              <label>
                Användarnamn
                <h4>{username}</h4>
              </label>
            </div>
            <div className={classes.tickets}>
              <h2>Mina biljetter</h2>
              <ul>
                <li>
                  <p>Filmtitel</p>
                  <p>Tid / Visning</p>
                </li>
                <li>
                  <span>The Godfather</span>
                  <span>18.02.2022 09:00</span>
                </li>
                <li>
                  <span>Idiocracy</span>
                  <span>18.02.2022 09:00</span>
                </li>
                <li>
                  <span>The Batman</span>
                  <span>18.02.2022 09:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CenterHorizon>
    </div>
  );
};

export default MyPage;
