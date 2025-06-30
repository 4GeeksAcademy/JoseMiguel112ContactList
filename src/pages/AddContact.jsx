import { Link } from "react-router-dom";
import {ContactForm} from "../components/ContactForm"

export const AddContact = () => {


    return(
    <div className="container text-center m-5 p-3">
        <h1>Add a new contact</h1>
        <ContactForm/>
        
    </div>
    );
}