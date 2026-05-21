import { useEffect, useState } from "react"
import './styles.css'
import { useNavigate } from "react-router-dom"



function Viewcustomer(){
    let [customers , setcustomers] = useState([])
    let navigate = useNavigate()

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("customers")) || []
        setcustomers(data)
    }, [])


    function Gotoeditpage(index){
        localStorage.setItem("editindex" , index)
        navigate("/editcustomer")
       
    }

    function Getback(){
        navigate("/")

    }

    function Deletedetail(index){

        if(confirm("You want to delete ..!!")){
            let data = JSON.parse(localStorage.getItem("customers")) || []
        data.splice(index , 1)

        localStorage.setItem("customers" , JSON.stringify(data))
        setcustomers(data)

        }
        

    }

    let content

    if(customers.length==0)
    {
        content = <p>No Data found</p>
    }
    else{
        content = customers.map((cust, index)=>(
            <div className="customer-details">
            <p>Name : {cust.name}</p>
            <p>Email : {cust.email}</p>

            <button className="btn btn-danger p-2 mb-2" onClick={() => Deletedetail(index)}>Delete</button>
            <br />
            <button className="btn btn-warning p-2" onClick={() => Gotoeditpage(index)}>Edit</button>
            </div>
        ))
    }

    

    return(
        <div className="main-container">
            <div className="card-box">
                <h1 style={{color:"blue"}}>Customer Information</h1>

                {content}
                

                <button className="btn btn-outline-danger m-3" onClick={Getback}>Back</button>
            </div>
        </div>
    )
}

export default Viewcustomer