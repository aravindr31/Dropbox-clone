import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDropbox } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
function Login() {
  const classes = useStyles();

  return (
    <LoginPage>
      <LoginHeading>
        <FontAwesomeIcon icon={faDropbox} color="#3A4D97" size="3x" />
        <h1>Dropbox</h1>
      </LoginHeading>
      <LoginBody>
        <SvgImage>
          <img
            src="https://cfl.dropboxstatic.com/static/images/empty_states/sign-in-boulder@2x-vfl87XcA-.png"
            alt=""
            srcset=""
          />
        </SvgImage>
        <LoginForm>
          <LoginText>
            <h1>SignIn</h1>
          </LoginText>
          <Button
            className={classes.button}
            style={{
              width: "50%",
              margin: "5px 10px",
              "background-color": "#24292E",
              color: "#fff",
            }}
            startIcon={
              <FontAwesomeIcon icon={faGithub} color="#fff" size="1x" />
            }
          >
            Github
          </Button>
          <Button
            className={classes.button}
            style={{
              width: "50%",
              margin: "5px 10px",
              "background-color": "#4867AA",
              color: "#fff",
            }}
            startIcon={
              <FontAwesomeIcon icon={faFacebookF} color="#fff" size="1x" />
            }
          >
            FaceBook
          </Button>
          <Button
            className={classes.button}
            style={{
              width: "50%",
              margin: "5px 10px",
              "background-color": "#D34338",
              color: "#fff",
            }}
            startIcon={
              <FontAwesomeIcon icon={faGoogle} color="#fff" size="1x" />
            }
          >
            Google
          </Button>
          {/* </LoginSwitches> */}
        </LoginForm>
      </LoginBody>
    </LoginPage>
  );
}

export default Login;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const LoginHeading = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    font-weight: 500;
    font-size: 35px;
    padding: 0px 20px;
  }
`;
const LoginBody = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const SvgImage = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img {
    padding-right: 50px;
    height: 377px;
    object-fit: contain;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
const LoginForm = styled.div`
  flex: 0.5;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex: 1;
    align-items: center;
  }
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
