import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import User from "./User";

function Auth() {
  const [userData, setUserData] = useState("");

  if (userData) {
    window.localStorage.setItem("name", userData.name);
    window.localStorage.setItem("email", userData.email);
    window.localStorage.setItem("picture", userData.picture);

    return <User info={userData} />;
  }

  let name = window.localStorage.getItem("name");
  let email = window.localStorage.getItem("email");
  let picture = window.localStorage.getItem("picture");

  // if you have name, email, picture in localStorage.
  // It means you are already logged in.
  if (name && email && picture) {
    setUserData({ name: name, email: email, picture: picture }); // Bad Way
    // setUserData({ name, email, picture });  Good Way
  }

  return (
    <>
      <GoogleOAuthProvider clientId="505367413653-809pkppvl2gd74saqk15s11pa8jo8hif.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            let token = credentialResponse.credential;
            var decoded = jwt_decode(token);
            // console.log(decoded);
            setUserData(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
}

export default Auth;
