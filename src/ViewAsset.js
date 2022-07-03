import { useEffect, useState } from "react";
import AssetTables from "./AssetTables";
import "bootstrap/dist/css/bootstrap.css";
import {Button} from "react-bootstrap";

const ViewAsset = () => {

    const credentials1 = {
        "username" : "shakil",
        "password" : "shakil"
    }
    const credentials2 = {
        "username" : "manoharan",
        "password" : "manoharan"
    }

    const [assets, setAssets] = useState(null)
    const [jwt, setJwt] = useState('')
    const [networth, setNetworth] = useState('?');

    // const [data, setData] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

     useEffect(()=>{
        setTimeout(fetch("http://localhost:8081/getToken", {
           method:'post',
           headers:  new Headers({
               'Accept': 'application/json',
               'Content-Type': 'application/json'
           }),
           body : JSON.stringify(credentials1)
       }).then(res => {
           return res.json();
       })
       .then(data => {
           console.log(data.jwttoken);
           fetch("http://localhost:8084/calculateNetworth/viewAsset", {
           method : 'get',
           headers : new Headers({
               'Authorization': 'Bearer '+data.jwttoken
           })
       }).then(res => {
           return res.json();
       })
       .then(data => {
           console.log(data);
           setAssets(data);
       })
      setJwt(data.jwttoken)
         }  ))
        },[]);

    const handleNetworth = () => {
    fetch('http://localhost:8084/calculateNetworth/', {
        method:'get',
        headers: new Headers({
            'Authorization': 'Bearer '+jwt
        })
    }).then((res)=> {
        return res.json();
    }).then(data=>{
        console.log(data);
        setNetworth(data);
    })
    }

    // useEffect(()=>{
    //          fetch("http://Authorization-env.eba-5dup2ppr.eu-central-1.elasticbeanstalk.com:8081/getToken", {
    //             method:'post',
    //             headers:  new Headers({
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             }),
    //             body : JSON.stringify(credentials1)
    //         }).then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data.jwttoken);
    //         // console.log("Hello "+jwt);
    //     fetch("http://ij007pod2calculatenetworth-env.eba-h2zuseiy.eu-central-1.elasticbeanstalk.com:8084/calculateNetworth/viewAsset", {
    //             method : 'get',
    //             headers : new Headers({
    //                 'Authorization': 'Bearer '+data.jwttoken
    //             })
    //         }).then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //             setAssets(data);
    //         })
    //         setJwt(data.jwttoken)
    //           }  )
    //   },[]);

    //   // console.log("The JWT token is "+jwt);

    // const handleNetworth = () => {
    //     fetch('http://ij007pod2calculatenetworth-env.eba-h2zuseiy.eu-central-1.elasticbeanstalk.com:8084/calculateNetworth/', {
    //         method:'get',
    //         headers: new Headers({
    //             'Authorization': 'Bearer '+jwt
    //         })
    //     }).then((res)=> {
    //        //console.log(res);
    //         return res.json();
    //     }).then(data=>{
    //         console.log(data);
    //         setNetworth(data);
    //     })
    // }

    return (
        <div className="container">
            <div className="col-md-12 text-center">
          {/* {error && <div> {error} </div> }
          {isLoading && <div> Loading....Please Wait </div>} */}
          { assets && <AssetTables assets={assets} />} 
          <Button className="btn btn-primary" onClick={()=>handleNetworth()}>NetWorth</Button> 
          <h3>₹{networth}</h3>
        </div>
        </div>
      );
}
 
export default ViewAsset;