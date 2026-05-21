import { BrowserRouter,Routes,Route, Link } from "react-router-dom"
import Addcustomer from "./Addcustomer"
import Viewcustomer from "./Viewcustomer"
import Editcustomer from "./editcustomer"
import Home from "./home"


function Mainview(){
    return(
        <>
        <BrowserRouter>
        {/* <nav>
            <Link to="/">Home</Link>
            <Link to="/addcustomer">Addcustomer</Link>
            <Link to="/viewcustomer">Viewcustomer</Link>
        </nav> */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addcustomer" element={<Addcustomer/>}/>
            <Route path="/viewcustomer" element={<Viewcustomer/>}/>
            <Route path="/editcustomer" element={<Editcustomer/>}/>

        </Routes>
        </BrowserRouter>

        </>
    )
}

export default Mainview