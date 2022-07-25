import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleUserInput = (e) => setUser(e.target.value);
  const handlePwdInput = (e) => setPwd(e.target.value);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    try {
      const userData = login({ user, pwd }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setPwd("");
      navigate("/welcome");
    } catch (error) {
      if (!error.response) {
        setErrMsg("No server Response");
      } else if (error.message?.status === 400) {
        setErrMsg("Messing username or pwd");
      } else if (error.message?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errMsg.current.focus();
    }
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section className="login">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <h1>Employee Login</h1>

          <form onSubmit={handleSubmitLogin}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              value={user}
              onChange={handleUserInput}
              autoComplete="off"
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={handlePwdInput}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
        </section>
      )}
    </>
  );
};

export default Login;
