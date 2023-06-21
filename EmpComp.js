let EmpComp=(props)=>
{
    return(
        <table border={1}>
            <tr>
                <td>Emp_Id</td><td>Emp_Name</td><td>Emp_salary</td>
            </tr>
            {
                props.emps.map((v)=>{
                    return (
                        <tr>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.sal}</td>
                        </tr>
                    )
                })
            }
        </table>
    )
}

EmpComp.defaultProps={
    emps:[{id:"1",name:"vaibhav",sal:"35000"},{id:"2",name:"rakesh",sal:"40000"},{id:"3",name:"harsh",sal:"45000"}]
}

export default EmpComp