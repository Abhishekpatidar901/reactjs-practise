import React from "react";

const CardWrapper = ({children})=>{
return (
    <div style={{border:'1px solid #ccc',padding:'16px',margin:'16px',borderRadius:'8px'}}>
        {children}
    </div>
);
};

export default CardWrapper;