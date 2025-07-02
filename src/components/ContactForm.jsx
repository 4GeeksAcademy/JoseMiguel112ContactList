import { useState } from "react"

export const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, sePhone] = useState("")
    const [address, setAddress] = useState("")

    return (


        <div className="container w-75">
            <form>

            <div className="mb-3 text-start justify-content-start">

                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
                
            </div>
            <div className="mb-3 text-start justify-content-start">

                <label htmlFor="exampleFormControlInput2" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Enter Email"/>
                
            </div>
            <div className="mb-3 text-start justify-content-start">

                <label htmlFor="exampleFormControlInput3" className="form-label">Phone</label>
                <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Enter Phone"/>
                
            </div>
            <div className="mb-3 text-start justify-content-start">

                <label htmlFor="exampleFormControlInput4" className="form-label">Address</label>
                <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Enter Address"/>
                
            </div>
            
            <button className="btn btn-primary w-100">Save</button>
            </form>
            
        </div>
    )
}