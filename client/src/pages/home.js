import Navbar from "../components/navbar";

function Home() {
    return (
        <div>
        <Navbar/>
        <div className="container justify-content-center align-items-center d-flex" style={{"flexDirection" : "column"}}>
        <img src="logo.png" className="mt-5"></img>
            <p  style={{"fontSize" : "100px"}}>Work Mitra</p>
            <p className="fs-2">Empowering Workers (Unrecognised Professionals)</p>
        </div>
        </div>
    )
}

export default Home;