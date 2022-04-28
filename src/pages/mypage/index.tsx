import { ClassNames } from '@emotion/react';
import { NextPage } from 'next';
import React from 'react';
import {
  CenterHorizon,
  CustomButton,
  CustomText,
} from '../../components/CustomMUI/CustomUI';
import classes from './index.module.css';

const MyPage: NextPage = () => {
  return (
    <div className="main">
      <CustomButton color="error" variant="contained">
        Logga ut
      </CustomButton>
      <CustomText className={classes.titleHeader}>Mina Sidor</CustomText>
      <CenterHorizon>
        <div className={classes.background}>
          <div className={classes.mainContent}>
            <h2>Profil</h2>
            <div className={classes.nameInfo}>
              <label>
                Förnamn
                <h4>Johan</h4>
              </label>
              <label>
                Efternamn
                <h4>Ekström</h4>
              </label>
              <label>
                Användarnamn
                <h4>JohanEkstroem</h4>
              </label>
            </div>
            <div className={classes.tickets}>
              <h2>Mina biljetter</h2>
            </div>
          </div>
        </div>
      </CenterHorizon>
    </div>
  );
};

export default MyPage;
/* 
1. When user types in correct username and password, redirects to mypage.
  A. Render hardcoded stuff in localhost:3000/login
  B. Fetch data from DB
  C. Replace hardcoded stuff. (Stuff is: firstname, lastname) 
  */
