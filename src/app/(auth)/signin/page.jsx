import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <div>
      <h1>sign in.</h1>
      <h1>If dont have account? </h1> <Link href="/signup">Sign up Now</Link>
    </div>
  );
};

export default SignInPage;
