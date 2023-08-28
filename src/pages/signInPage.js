import React from 'react';
import SignInGoogle from '../components/auth/GoogleAuth';

const SignInPage = () => {
  const handleSignIn = async () => {
    const response = await SignInGoogle();
    if (response.success) {
        console.log('Logged in as:', response.user.displayName);
        console.log('User ID:', response.user.uid);
        console.log('Email:', response.user.email);
    } else {
        console.log('Error', response.message);
    }
  };

  return (
    <div>
      Sign In Through Google!
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignInPage;

