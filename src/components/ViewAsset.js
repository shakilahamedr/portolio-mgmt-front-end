import { useEffect, useState } from "react";
import AssetTables from "./AssetTables";
import "bootstrap/dist/css/bootstrap.css";
import {Button} from "react-bootstrap";
import { useJwtContext } from "../hooks/useJwtContext";

const ViewAsset = () => {

    const {jwt} = useJwtContext()

    const [assets, setAssets] = useState(null)
    const [networth, setNetworth] = useState('?');

     useEffect(()=>{
        fetch("http://Ij007pod2calculatenetworth-env.eba-nji8bmib.eu-central-1.elasticbeanstalk.com:8084/calculateNetworth/viewAsset", {
            method : 'get',
            headers : new Headers({
                'Authorization': 'Bearer '+jwt
            })
            }).then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setAssets(data);
            })
     },[jwt]);

    const handleNetworth = () => {
        fetch('http://Ij007pod2calculatenetworth-env.eba-nji8bmib.eu-central-1.elasticbeanstalk.com:8084/calculateNetworth/', {
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

    return (
        <div className="container">
            <div className="col-md-12 text-center">
          { assets && <AssetTables assets={assets} />} 
          <Button className="btn btn-primary" onClick={()=>handleNetworth()}>NetWorth</Button> 
          <br/><br/>
          <h3>₹{networth}</h3>
        </div>
        </div>
      );
}
 
export default ViewAsset;