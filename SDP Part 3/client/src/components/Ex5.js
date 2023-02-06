import { RepeatOneSharp } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";

function Ex5() {

    const [result,setResult] = useState(null);

    const isDict = dict => {
        return typeof dict === "object" && !Array.isArray(dict);
    };

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.post('http://localhost:8082/insert_stu', {
            stu_id: data.get("stu_id"),
            stu_name: data.get("stu_name"),
            stu_dept: data.get("stu_dept"),
            stu_address: data.get("stu_address")
        }).then((resposnse)=>{
            console.log(resposnse.data);
        })
    }

    function showOne() {
        axios.get('http://localhost:8082/show_one_stu', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    function showAll() {
        axios.get('http://localhost:8082/show_all', {params:{

        }}).then((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }

    if(result == null) {
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    Student ID: <input type="text" name="stu_id" />
                    <br/>
                    Name: <input type="text" name="stu_name" />
                    <br/>
                    Dept: <input type="text" name="stu_dept" />
                    <br/>
                    Address: <input type="text" name="stu_address" />
                    <br/><br/>
                    <input type="submit" value="Save Student Data" />
                </form>
                <br/>
                <button onClick={()=>showOne()}>Display First Student in Database</button>
                <br/>
                <button onClick={()=>showAll()}>Display All Students</button>
                <br/> 
            </div>
        );
    }
    else {
            if(isDict(result)) {
                return (
                    <div>
                        <table border="1">
                            <tr>
                                <th> Student ID </th> 
                                <th> Student Name </th> 
                                <th> Students Department </th> 
                                <th> Student Address </th>
                            </tr>
                            <tr>
                                <td> {result.stu_id} </td>
                                <td> {result.stu_name} </td>
                                <td> {result.stu_dept} </td>
                                <td> {result.stu_address} </td>
                            </tr>
                        </table>
                    </div>
                );
            
        }
        else {
            return (
                <div>
                    <table border="1">
                        <tr>
                            <th> Student ID </th> 
                            <th> Student Name </th> 
                            <th> Students Department </th> 
                            <th> Student Address </th>
                        </tr>
                        {result.map((obj)=>{
                            return(
                                <tr>
                                    <td> {obj.stu_id} </td>
                                    <td> {obj.stu_name} </td>
                                    <td> {obj.stu_dept} </td>
                                    <td> {obj.stu_address} </td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            );
        }
    }
}

export default Ex5;