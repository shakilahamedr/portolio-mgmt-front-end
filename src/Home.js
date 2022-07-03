import { useEffect, useState } from "react";

const Home = () => {

    let count = 1;
    const [name,setName] = useState('shakil');
    const [designation, setDesignation] = useState(["Software Engineer"]);
    const [age,setAge] = useState('21')

    const handleClick = (name,e) => {
        setName(name);
        setDesignation(['Software Engineer ','specialized in ','Full Stack Engineering.'])
    }
    const handleAge = (age) => {
        setAge(age);
    }

    useEffect(()=> {
        // setName('useeffect triggered shakil');
        console.log("useEfect inside home ran "+count);
    },[age])

    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is a {designation}</p>
            <button onClick={(e) => handleClick("Shakil Ahamed",e)}>click me</button>
            <p>{age}years old</p>
            <button onClick={()=> handleAge('22(on july 6 2022)')}>do y know my birthday?</button>
        </div>
      );


    return (
        <div></div>
    );
}
 
export default Home;