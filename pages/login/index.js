import Head from "next/head";
import LoginForm from "../../components/form/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login | Base Auth with Redux Toolkit</title>
      </Head>
      <LoginForm />
    </>
  );
};

export default LoginPage;
