import React from 'react';
import { signIn } from '../firebase';

const SignIn = () => {
  return (
    <section className="SignIn">
      <h1>Bootcamp Jobs</h1>
      <button
        id="LogInButton"
        children="Login"
        onClick={() => signIn()}
      />
    </section>
  );
}

export default SignIn;
