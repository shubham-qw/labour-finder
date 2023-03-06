import Navbar from "../components/navbar";
import Card from "../components/card";
import { useEffect, useState } from "react";
function LabourCard() {
    const [labour, setLabour] = useState([]);

    const load_labour = async () => {

        const response = await fetch("http://localhost:5000/api/labour", {
            "method": "GET"
        })

        const json = await response.json();

        if (json.success) {
            setLabour(json.labour);
        }
    }

    useEffect(() => {
        load_labour();
    }, []);
    return <>
        <div>
            <Navbar />
            <div className="container d-flex">
                <div className="row justify-content-center align-items-center mt-5">
                    {
                        labour.map((item) => {
                            return (
                                <Card item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
}

export default LabourCard;