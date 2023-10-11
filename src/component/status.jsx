import React, { useState } from "react";

function Status() {
  const [loginStatus, setStatus] = useState(false);

  const islogin = () => {
      setStatus((prevIsLoggedIn) => !prevIsLoggedIn)
      
  };
  return (
    <div>
      <h1>user is : {loginStatus ? "Logged In" : "Logged Out"}</h1>
          <button onClick={islogin}>{ islogin?'Login':'logout' }</button>
    </div>
  );
}

export default Status;
