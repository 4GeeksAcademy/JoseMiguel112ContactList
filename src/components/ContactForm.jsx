export const ContactForm = () => {


    return (
        <div className="container w-75">
            <div className="mb-3 text-start justify-content-start">

                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
                
            </div>
            <div className="mb-3 text-start justify-content-start">

                <label for="exampleFormControlInput2" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Enter Email"/>
                
            </div>
            <div className="mb-3 text-start justify-content-start">

                <label for="exampleFormControlInput3" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Enter Phone"/>
                
            </div>
            <div className="mb-3 text-start justify-content-start">

                <label for="exampleFormControlInput4" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Enter Address"/>
                
            </div>
            
            
        </div>
    )
}