import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateProviderValue } from "../StateProvider";

function Login() {
  const [{ User }, dispatch] = useStateProviderValue();
  const classes = useStyles();
  const handleLogin = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch({
        type: "SET_USER",
        User: result.user,
      });
      localStorage.setItem("User", JSON.stringify(result.user));
    });
  };

  return (
    <LoginPage>
      <LoginImage>
        <img
          src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg"
          alt=""
          srcset=""
        />
      </LoginImage>
      <Button
        className={classes.button}
        startIcon={
          <FontAwesomeIcon icon={faGoogle} style={{paddingRight:"10px"}} color="#fff" size="1x" />
        }
        onClick={handleLogin}
      >
        Google
      </Button>
    </LoginPage>
  );
}

export default Login;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    margin: "5px 10px",
    padding:"8px 50px 8px 50px",
    backgroundColor: "#1A73E8",
    color: "#fff",
    "&:hover":{
      backgroundColor:"#174EA6"
    }

  },
}));

const LoginPage = styled.div`
  background: #f1f3f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow:hidden ;
`;
const LoginImage = styled.div`
  img {
    height: 350px;
    object-fit: contain;
  }
`;
const LoginBody = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const LoginText = styled.div`
  width: 100%;
  width: 50%;
  padding: 20px 0px;
  h1 {
    font-weight: 400;
    font-size: 25px;
  }
`;
