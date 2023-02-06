import axios from "axios";
import { useState } from "react";

function Ex4 () {

    const [res,setRes] = useState(null);
    const [search, setSearch] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setSearch(data.get("searchbox"))
        axios.get('https://api.github.com/users/defunkt/following', {

        }).then((response)=>{
            console.log(response.data[0])
            setRes(response.data)
        })
    }

    if (res === null) {
    return(
        <div style={{minHeight:"300px", minWidth:"200px", backgroundColor:"white", margin:"30px", padding:"20px", border:"1px solid green"}}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="searchbox" />
                <input type="submit" value="search" />
            </form>
            Search for values [1,3,17,19,21,23,25,26,36,38,46,47,48,49,68,69,70,80,90,100,105,108,118,124,127,137,138,139,141,143] to Retrieve it
        </div>
    );
}
else {
    return(
        <center>
        <div style={{height:"400px", width:"500px", backgroundColor:"white", margin:"30px", padding:"20px", border:"1px solid green"}}>
            <table>
            {res.map((obj)=>{
                if(obj.id == search) {
                    console.log(obj.id)
                    console.log(search)
                    return(
                        <div>
                            <tr><td style={{width:"180px"}}>ID:</td> <td>{obj.id}</td></tr>
                            <br/>
                            <tr><td style={{width:"180px"}}>Name:</td> <td>{obj.login}</td></tr>
                            <br/>
                            <tr><td style={{width:"180px"}}>Profile Photo:</td> <td><img src={obj.avatar_url} style={{width:"150px", height:"150px"}} /></td></tr> 
                            <br/>
                            <tr><td style={{width:"180px"}}>Web Page Link:</td> <td>https://github.com/mojombo</td></tr> 
                        </div>
                    );
                }
                return (<div></div>);
            })}
            </table>
        </div>
        </center>
    )
}

}

export default Ex4