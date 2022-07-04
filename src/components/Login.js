import "bootstrap/dist/css/bootstrap.css";
import {Button} from "react-bootstrap";
import axios from "axios";
import {useRef, useState} from "react";
import {Redirect} from "react-router-dom";
import { useJwtContext } from "../hooks/useJwtContext";

const Login = (props) => {
  const [submitStatus, setSubmitStatus] = useState(false);
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const {dispatch} = useJwtContext()

  const callViewAsset = async (event) => {
    event.preventDefault();
    
    const user = {
      username : usernameInputRef.current.value,
      password : passwordInputRef.current.value
    };
    let response = await axios.post(
      "http://Ij007pod2authorization-env.eba-fsjdukpv.eu-central-1.elasticbeanstalk.com:8081/getToken",
      user
    );
    console.log(user);
    console.log(response.data.jwttoken);
    dispatch({type: 'SET_JWT', payload: response.data.jwttoken})
    setSubmitStatus(true);
  };
  if(submitStatus) {
    return <Redirect to ="/viewAsset" />;
  }
  
  return ( 
    <div className="container-fluid">
      <div className="col-md-12">
      <center>
      <h3 className="text-primary">Login</h3>
      <form onSubmit={callViewAsset}>
        <div className="form-group col-3">
          <label className="fw-bold ">UserName</label>
          <input
              type="text"
              name="username"
              className="form-control"
              ref={usernameInputRef}
              />
        </div>
        <br />
        <div className="form-group col-3">
          <label className="fw-bold">Password</label>
          <input
              type="password"
              name="password"
              className="form-control"
              ref={passwordInputRef}
              />
        </div>
        <br />
        <Button type="submit" >Submit</Button>
      </form>
      </center>
    </div>
    </div>
    );
};
 
export default Login;