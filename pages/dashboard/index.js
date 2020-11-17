import Head from "next/head";
import requiredAuth from "../../components/requiredAuth/requiredAuth";
import { useDispatch } from "react-redux";
import store from "../../store";
import { doLogout } from "../../lib/slices/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>Dashboard | Base Auth with redux toolkit</title>
      </Head>
      <h1>Welcome to Dashboard</h1>
      <button
        onClick={() => {
          dispatch(doLogout());
        }}
      >
        Logout
      </button>
    </>
  );
};

export default requiredAuth(Dashboard);
