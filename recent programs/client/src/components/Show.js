import axios from "axios";
import { useState } from "react";
function Show(){
    const[r,setR] = useState(null)
    axios.get('http://localhost:8081/show',{
        headers:{
            "authorization": `Bearer ${localStorage.getItem("token")}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((res)=>{
        console.log(res.data)
        setR(res.data)
    })
    function handleDelete(event){
         alert(event.currentTarget.getAttribute("user"))
         axios.delete('http://localhost:8081/delete',{params:{
            "name":event.currentTarget.getAttribute("user")
         }}).then((res)=>{
            console.log(res.data)
         })
    }
    if(r!=null){
    return(
        <table border="1">
            <tr>
                <th>name</th>
                <th>email</th>
                <th>roll</th>
                <th>delete</th>
            </tr>
        {r.map((user)=>{
            return(
                
                    <tr>
                        <td> {user.name} </td>
                        <td> {user.email} </td>
                        <td> {user.roll} </td>
                        <td> <button user ={user.name} onClick={handleDelete}>delete</button> </td>
                    </tr>
                
            )
        })}
        </table>
    );
}
else{
    return(
        <div>
            Data Fetching
        </div>
    )
}
}
export default Show