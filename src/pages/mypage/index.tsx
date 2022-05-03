import Cookies from 'cookies';
import Iron from '@hapi/iron';
import { GetServerSideProps, NextPage } from 'next';
import React, { useContext } from 'react';
import Router from 'next/router';
import {
  CenterHorizon,
  CustomButton,
  CustomText,
} from '../../components/CustomMUI/CustomUI';
import classes from './index.module.css';
import { LoggedInContext } from '../../components/login/IsLoggedIn';
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

type MyPageProps = {
  username: string;
  firstname: string;
  lastname: string;
  loggedIn: boolean;
};
const MyPage: NextPage<MyPageProps> = ({
  username,
  firstname,
  lastname,
  loggedIn,
}) => {
  const { isLoggedIn, changeLogInState } = useContext(LoggedInContext);
  const handleOnClickLogout = async () => {
    Router.push('/');
    changeLogInState(false);
    const res = await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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
