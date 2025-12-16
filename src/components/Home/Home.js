import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./Home.module.css";

const Home = () => {
  const authCtx = useContext(AuthContext);

  return (
    <section className={classes.home}>
      <h1>Welcome Back!</h1>
      <button onClick={authCtx.onLogout}>Logout</button>
    </section>
  );
};

export default Home;
