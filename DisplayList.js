let DisplayList=(props)=>
{
     return(
        <div>
            <h4>list of names</h4>
            <ol>
                {
                    props.names.map(v=> {return <li key={v}>{v}</li>})
                }
            </ol>
        </div>
     )
}
DisplayList.defaultProps={
    names:["vaibhav","rakesh","harsh"]
}

export default DisplayList;