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
        Custombutton
      </CustomButton>
      <CustomText className={classes.titleHeader}>Mina Sidor</CustomText>
      <CenterHorizon>
        <div className={classes.mainContent}>
          <p>Johan</p>
          <p>Ekström</p>
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
