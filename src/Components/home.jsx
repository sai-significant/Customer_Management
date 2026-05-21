import { BrowserRouter, useNavigate } from "react-router-dom"
import './styles.css'



function Home(){
    let navigate = useNavigate()



    function Movetopage(){
        navigate("/addcustomer")

    }

    function Backtopage(){
        navigate("/viewcustomer")
    }
    
    
    return(
        <>
        {/* <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/addcustomer">Addcustomer</Link>
                <Link to="/viewcustomer">Viewcustomer</Link>
            </nav>
        
        </BrowserRouter> */}
        <div className="main-container">
            <div className="card-box">
                <h1>Customer Management</h1>

                <button className="btn btn-outline-primary m-2" onClick={Movetopage} >Addcustomer</button>
                <button className="btn btn-outline-warning m-2" onClick={Backtopage}>Viewcustomer</button>
            </div>
        </div>
        </>
    )
}

export default Home