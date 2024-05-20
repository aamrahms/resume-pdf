import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { API_KEY } from "./constants";
import { ResumePdf } from "./Resume";
import axios from "axios";

export default function Home() {
    const [show, setHide] = useState(false);
    const [url, setUrl] = useState("");
    const [resumeDetails, setResumeDetails] = useState([]);
    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };
    const fetchUrl = async e => {
        try {
            console.log("before api call " + url + API_KEY)
            // let res = await axios.get(`https://localhost:3001/linkedin/profile?query=${url}`);
            let res = await axios.get(`http://localhost:3001/linkedin/profile?query=${url}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            });

            console.log("after linkedin api call")
            // const response = await fetch("./resume1.json");
            // const res = await response.json();

            setResumeDetails(res.data);
            console.log(resumeDetails)
            setHide(true);
        } catch (error) {
            console.log("No such profile exists, please try again");
        }
    };
    return (
        <div className="container">
            <h2> Enter profile you wish to generate resume for </h2>
            <input id="url" height="20px" width="30px" type="text" onChange={handleUrlChange} />
            <button type="submit" onClick={fetchUrl}>Generate PDF</button>
            {show && (
                <PDFDownloadLink
                    document={<ResumePdf data={resumeDetails} />}
                    fileName="resume.pdf"
                    style={{
                        textDecoration: "none",
                        padding: "10px",
                        color: "#4a4a4a",
                        backgroundColor: "#f2f2f2",
                        border: "1px solid #4a4a4a"
                    }}
                >
                    {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : "Download Pdf"
                    }
                </PDFDownloadLink>
            )}

        </div>
    );
}
