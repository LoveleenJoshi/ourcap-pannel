import { Link } from "react-router-dom";
import { useState } from "react";


export function Login(){
    const[data,setData]=useState({username:'', password:''});
    function handleUserName(e){
        setData({
            ...data,
            username:e.target.value
        })
    }

    function handlePassword(e){
        setData({
            ...data,
            password:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(data)

    }

    return(
        <div className="container-fluid">
         <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
        <form onSubmit={handleSubmit} className="rounded border border-2 border-secondary m-3 p-3" style={{boxShadow:"2px solid gray"}}>
        <dl>
            <h4><span className="bi bi-person-fill mt-2"></span>Registered User</h4>
            <dt>UserName</dt>
            <dd>
                <input type="text" onChange={handleUserName} className="form-control"/></dd>

                <dt>Password</dt>
                <dd><input type="password" onChange={handlePassword} className="form-control"/></dd>
           
           </dl>
           <button className="btn btn-secondary w-100 mb-3">Login</button>
           <Link to="/Register">New User? Register</Link>
        </form>
         </div>

        </div>
    )
} 