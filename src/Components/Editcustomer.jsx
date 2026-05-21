import { useEffect, useState } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'

function Editcustomer(){

    let [name , setname] = useState("")
    let [email , setemail] = useState("")
    let navigate = useNavigate()


    let index = localStorage.getItem("editindex")

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("customers")) ||[]

        setname(data[index].name)   
        setemail(data[index].email)
    }, [])


    function Changename(e){
        setname(e.target.value)
    }

    function Changeemail(e){
        setemail(e.target.value)
    }


    function Updatecustomer(){
        let data = JSON.parse(localStorage.getItem("customers")) || []
        data[index] = {name , email}

        localStorage.setItem("customers" , JSON.stringify(data))

        alert("Data Updated Successfully....!!")

        navigate("/viewcustomer")
        
        
    }

    function Getback(){
        navigate("/viewcustomer")
    }
    return(
        <div className="main-container">
            <div className="card-box">
                <h1>Edit Customer</h1>


                <input type="text" value={name} className="form-control m-2" onChange={Changename} />
                <input type="email" value={email} className="form-control m-2"  onChange={Changeemail}/>


                <button className="btn btn-warning m-3" onClick={Updatecustomer}>Update</button>
                <button className='btn btn-danger' onClick={Getback}>Back</button>

                
            </div>
        </div>
    )
}

export default Editcustomer