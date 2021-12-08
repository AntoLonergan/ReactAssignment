import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext} from "../contexts/authContext"
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CenterFocusStrongSharp } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  media: { height: 300 },
    backgroundColor: "rgb(204, 204, 0)",

  },
}));

const LoginPage = props => {
  const classes = useStyles();
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }
  return (
    <Card className={classes.root} variant="outlined">
      <h2>Login Now!</h2>
      <p>You must log in to view the protected pages </p>
      <input id="username" placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <input id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <br>
      </br>
      <button onClick={login}>Log in</button>
      <p>Not Registered?</p>
     <p><Link to="/signup">Sign Up!</Link></p>
   
    </Card>
  );
};

export default LoginPage;