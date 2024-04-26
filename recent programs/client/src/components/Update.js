import axios from "axios"
export default function update(){
    function handleUpdate(){
        axios.put('http://localhost:8081/update',{
            name:document.getElementById("idname").value,
            pw:document.getElementById("idpw").value,
            email:document.getElementsByName("email")[0].value,
            roll:document.getElementById("idroll").value
        }).then((res)=>{
            console.log(res.data)
        })
    }
    return (
        <div>
            <input type="text" id="idname" name="name" placeholder="name"/><br/><br/>
            <input type="password" id="idpw" name="pw" placeholder="password"/><br/><br/>
            <input type="text" id="idemail" name="email" placeholder="email"/><br/><br/>
            <input type="text" id="idroll" name="roll" placeholder="roll"/><br/><br/>
            <button onClick={handleUpdate}>update</button>
        </div>
    )
}