import { useNavigate } from "react-router-dom"
import './styles.css'
import { useState } from "react"


function Addcustomer(){

    let navigate = useNavigate()
    let [name, setname] = useState("")
    let [email, setemail] = useState("")

    function Gotohome(){
        navigate("/")
    }

    function Moveforward(){
        navigate("/viewcustomer")
    }

    function Addingcustomers(){
        

        let new_customer = {name , email}
        let data = JSON.parse(localStorage.getItem("customers")) || []

        data.push(new_customer)
        localStorage.setItem('customers', JSON.stringify(data))

        alert("Customer Added Successfully....!!")

        setname("")
        setemail("")
    }

    function Changeingname(e){
        setname(e.target.value)
    }

    function Changeemail(e){
        setemail(e.target.value) 
    }


    return(
       <div className="main-container">
        <div className="card-box">
            <h1 style={{color:"blue"}}>Add Customer</h1>

            <input type="text" placeholder="Enter name" value={name} className="form-control m-3" onChange={Changeingname} />
            <input type="email" placeholder="Enter email" value={email} className="form-control m-3" onChange={Changeemail} />

            <button className="btn btn-outline-primary m-4" onClick={Addingcustomers}>Add Customer Info</button>
            <br />

            <button className="btn btn-outline-danger m-3" onClick={Gotohome}>Back</button>
            <br />

            <button className="btn btn-outline-success m-3" onClick={Moveforward}>View Customers</button>
        </div>
       </div>
    )
}

export default Addcustomer