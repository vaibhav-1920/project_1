import React from "react";

function FactComp(props)
{
    var res=1;
    for(var i=2;i<props.num;i++)
    {
        res*=i;
    }
    return <h1>Factorial is :{res}</h1>
}
export default FactComp