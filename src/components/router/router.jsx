import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Login} from "../Login/login";
import { Register } from "../Register/Register";
import { Attendence } from "../Attendence/Attendence";

export function RouterMain(){
    return(
        <div>
            <BrowserRouter>
            <nav className="bg-dark d-flex justify-content-between  p-3">
              <div>
              <img src="" width="50" height="50"/>
              </div>
           <div>
           <button className="btn btn-dark text-white"> 
                <Link className="fw-bold text-decoration-none text-white me-3" to="/">Login</Link>
                </button>
               <button className="btn btn-dark text-white">
               <Link className="fw-bold  text-decoration-none text-white" to="/Attendence">Attendence</Link>
               </button>
           </div>
                
            </nav>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Attendence" element={<Attendence />}/>
              </Routes>
              </BrowserRouter>
        </div>
    )
}