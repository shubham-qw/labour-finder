import Navbar from "../components/navbar";
import React , {useState}from "react";

function User () {
    const [credentials, setCredentials] = useState({name : "",location : ""});
    const handleSubmit = async  (e) => {
        e.preventDefault();
      const response = await fetch("http://localhost:5000/api/user", {
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(credentials)
      })

      const json = await response.json();

      if (json.success) {
        console.log("Yeah!!!!");
      }
      else {
        console.log("No!!!");
      }
    }
    function handleChange(e) {
        setCredentials({...credentials, [e.target.name] : e.target.value});
    }
    return (
        <div>
        <Navbar />
            <div className="container" style={{marginTop : "100px" , maxWidth : "500px"}}>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <label htmlFor="exampleInput11">Name</label>
                        <input type="text" className="form-control" id="exampleInput11" name="name" value={credentials.name} onChange={handleChange}></input>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleInput22">Location</label>
                        <input type="text" className="form-control" id="exampleInput22" name="location" value={credentials.location} onChange={handleChange}></input>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default User;