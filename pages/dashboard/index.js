import Head from "next/head";
import requiredAuth from "../../components/requiredAuth/requiredAuth";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Base Auth with redux toolkit</title>
      </Head>
    </>
  );
};

export default requiredAuth(Dashboard);
