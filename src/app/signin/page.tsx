import SigninForm from "./components/SigninForm";

import React from "react";

type Props = {
    searchParams? : Record<"callbackURL"|"error",string>
}

const SignupPage = (props:Props) => {
  return <SigninForm error={props.searchParams?.error} />;
};

export default SignupPage;