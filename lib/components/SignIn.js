import React from 'react';
import { signIn } from '../firebase';

const SignIn = () => {
  return (
    <section className="SignIn">
      <button
        className='Button'
        id="LogInButton"
        children="Login With GitHub"
        onClick={() => signIn()}
      />
    </section>
  );
}

export default SignIn;
