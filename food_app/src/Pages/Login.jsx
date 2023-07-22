import React, { useState } from "react";
import * as Components from './Components';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login() {
  const [signIn, toggle] = React.useState(true);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [password, setpassword] = useState("");
  const [emaillogin, setemaillogin] = useState("");
  const [passwordlogin, setpasswordlogin] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesignup = (e) => {
    e.preventDefault();
    let obj = {
      name,
      email,
      age: Number(age),
      password
    };
    fetch("https://aware-lime-caiman.cyclic.app/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Signup Successful");
      })
      .catch((err) => {
        console.log(err);
      });
    setname("");
    setemail("");
    setage("");
    setpassword("");
  };

  const handlelogin = (e) => {
    e.preventDefault();
    let obj = {
      email: emaillogin,
      password: passwordlogin
    };
    fetch("https://aware-lime-caiman.cyclic.app/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", JSON.stringify(data.token));
          setLoginSuccess(true);
          setLoginError("");
          navigate('/');
        } else {
          setLoginSuccess(false);
          setLoginError("Wrong credentials. Please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginSuccess(false);
        setLoginError("An error occurred. Please try again.");
      });
    setemaillogin("");
    setpasswordlogin("");
  };

  return (
    <div style={{ width: "50%", margin: "auto", marginTop: "50px" }}>
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <Components.Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <Components.Input
              type="age"
              placeholder="Age"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
            <Components.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <Components.Button onClick={handlesignup}>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type="email"
              placeholder="Email"
              value={emaillogin}
              onChange={(e) => setemaillogin(e.target.value)}
            />
            <Components.Input
              type="password"
              placeholder="Password"
              value={passwordlogin}
              onChange={(e) => setpasswordlogin(e.target.value)}
            />
            <Components.Anchor href="#">Forgot your password?</Components.Anchor>
            <Components.Button onClick={handlelogin}>Sign In</Components.Button>
            {loginSuccess && <p>Login Successful</p>}
            {loginError && <p>{loginError}</p>}
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>

            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>

          </Components.Overlay>
        </Components.OverlayContainer>

      </Components.Container>
    </div>
  );
}

export default Login;