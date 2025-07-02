import { useState } from "react"

export const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    function addContact({ name }, { email }, { phone }, { address }) {

        fetch('https://playground.4geeks.com/contact/agendas/jmb/contacts', {
            method: "POST",
            body: JSON.stringify({
                "name": name,
                "phone": email,
                "email": phone,
                "address": address
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                
                if (response.status === 201) {
                    console.log(response);
                }

                return response.json()
            })
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
    }

    return (


        <div className="container w-75">
            <form>

                <div className="mb-3 text-start justify-content-start">

                    <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />

                </div>
                <div className="mb-3 text-start justify-content-start">

                    <label htmlFor="exampleFormControlInput2" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                </div>
                <div className="mb-3 text-start justify-content-start">

                    <label htmlFor="exampleFormControlInput3" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

                </div>
                <div className="mb-3 text-start justify-content-start">

                    <label htmlFor="exampleFormControlInput4" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />

                </div>

                <button className="btn btn-primary w-100" onClick={() => addContact({name},{email},{phone},{address})}>Save</button>
            </form>

        </div>
    )
}