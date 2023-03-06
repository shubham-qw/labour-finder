import Navbar from "../components/navbar";
import React , {useState}from "react";

function Labour() {
    const [credentials, setCredentials] = useState({name : "", exp : "", info : "", age : "", location : "", work : "", workRadius : "" , photo : "" })
    const handleSubmit = async  (e) => {
        e.preventDefault();
      const response = await fetch("http://localhost:5000/api/labour", {
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(credentials)
      })

      const json = await response.json();

      if (json.success) {
        console.log("Yeah!!!!");
        setCredentials({name : "", exp : "", info : "", age : "", location : "", work : "", workRadius : "" , photo : "" });
      }
      else {
        console.log("No!!!");
      }
    }
    function handleChange(e) {
        setCredentials({...credentials, [e.target.name] : e.target.value});
    }
    return <>
        <div>
            <Navbar />
            <div className="container justify-content-center align-items-center" style={{marginTop : "100px" , maxWidth : "500px"}}>
            <h1>Register Here</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInput1">Name</label>
                        <input type="text" className="form-control" id="exampleInput1" name="name" value={credentials.name} onChange={handleChange}></input>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleInput2">Age</label>
                        <input type="text" className="form-control" id="exampleInput2" name="age" value={credentials.age} onChange={handleChange}></input>
                    </div>
                   
                    <div className="form-group mt-2">
                        <label htmlFor="exampleInput3">Location</label>
                        <input type="text" className="form-control" id="exampleInput3" name="location" value={credentials.location} onChange={handleChange}></input>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleInput4">Work Radius In Kms</label>
                        <input type="text" className="form-control" id="exampleInput4" name="workRadius" value={credentials.workRadius} onChange={handleChange}></input>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleInput5">Photo Url</label>
                        <input type="text" className="form-control" id="exampleInput5" name="photo" value={credentials.photo} onChange={handleChange}></input>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleInput6">Profession</label>
                        <input type="text" className="form-control" id="exampleInput6" name="work" value={credentials.work} onChange={handleChange}></input>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleInput7">Experience</label>
                        <input type="text" className="form-control" id="exampleInput7" name="exp" value={credentials.exp} onChange={handleChange}></input>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleInput8">Information</label>
                        <input type="text" className="form-control" id="exampleInput8" name="info" value={credentials.info} onChange={handleChange}></input>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
        </div>
    </>
}

export default Labour;