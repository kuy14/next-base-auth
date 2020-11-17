import Head from "next/head";
import LoginForm from "../../components/form/LoginForm";
import { useSelector } from "react-redux";
import Router from "next/router";
import { useEffect } from "react";

const LoginPage = () => {
  const userState = useSelector((state) => state.user.user);

  useEffect(() => {
    if (userState.length !== 0) {
      return Router.push("/dashboard");
    }
  });

  return (
    <>
      {userState.length === 0 ? (
        <>
          <Head>
            <title>Login | Base Auth with Redux Toolkit</title>
          </Head>
          <LoginForm />
        </>
      ) : (
        <>Loading ...</>
      )}
    </>
  );
};

export default LoginPage;
