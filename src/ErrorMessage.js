import React from "react";

const ErrorMessage =(props)=>{

return <div className="ui negative message">
<i className="close icon"></i>
<div className="header">
 <h1>{props.message}</h1>
</div>
</div>
}

export default ErrorMessage;