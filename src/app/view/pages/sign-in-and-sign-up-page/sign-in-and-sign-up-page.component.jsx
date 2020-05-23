import React from 'react';

import SignIn from 'Common/components/sign-in/sign-in.hoc';
import SignUp from 'Common/components/sign-up/sign-up.component';

import './sign-in-and-sign-up-page.styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
