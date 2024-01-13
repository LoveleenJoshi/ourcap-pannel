import { Link } from "react-router-dom"

export function Register(){
    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <form className="m-3 p-3 border border-2 border-secondary rounded">
                <h2>Register New User</h2>
                <dl>
                    <dt>UserName</dt>
                    <dd>
                        <input type="text" className="form-control"/>
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input type="password" className="form-control"/>
                    </dd>
                    <button className="w-100 mb-3 btn btn-secondary">Register</button>
                    <Link to="/" >Existing User?Login</Link>
                </dl>
                </form>
           
            </div>
        </div>
    )
}