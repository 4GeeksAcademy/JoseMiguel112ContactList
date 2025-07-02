import { Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm"

export const AddContact = () => {


    return (
        <div className="container my-5 p-5">
            <div className="text-center">

                <h1>Add a new contact</h1>
            </div>
            <div className="justify-content-center ">

                <ContactForm />
<div className="container w-75">

                <Link to="/">
                    <p className="">or get back to contacts</p>
                </Link>
</div>
            </div>
        </div>
    );
}