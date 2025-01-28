import React, {useEffect,useState} from "react";

const functionalComponent = ()=>{
    const [state, setState] = useState();
    useEffect(()=>{
  fetch("https://sumserver.100xdevs.com/todos")
    .then(async(res)=>{
        const json =await res.json();
        setState(json.todos);
    })
    },[]);

    return <div>Hello from functional component</div>;
};

export default functionalComponent;

