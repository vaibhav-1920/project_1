import { useState } from "react"
import pic from './2.jpeg';
export default function CSass3()
{

    const[flag,setFlag]=useState(true);
    return(
        <div>
            <img src={pic} style={{width:"400px",height:"300px",display:flag?"block":"none"}}></img>
            <input type='checkbox' name='ch1' checked={flag}
            onChange={(e)=>{setFlag(e.target.checked)}}/>click on show/hide
        </div>
    )
}