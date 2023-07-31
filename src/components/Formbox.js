import { useState } from "react"


export default function Formbox(props) {

    const [text, setText] = useState("");

    const handalOnChnage = (event) => {
        setText(event.target.value)
    }

    const handalUpCase = () => {
        const newText = text.toUpperCase()
        setText(newText)
    }

    const handalLowCase = () => {
        const newText = text.toLowerCase()
        setText(newText)
    }

    const handalClear = () => {
        setText("")
    }

    const handalCoppy = () => {
        let coppytext = document.getElementById("myBox");
        coppytext.select();
        navigator.clipboard.writeText(coppytext.value);
    }
    const handalExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    return (
        <div style={{ color: `${props.mode === "light" ? "black" : "white"}` }} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`} value={text} onChange={handalOnChnage} id="myBox" rows="10"></textarea>
            </div>

            <div className="container ">
                <div className="btn btn-primary mx-1 my-1 " onClick={handalUpCase}>ToUpperCase</div>
                <div className="btn btn-primary mx-1 my-1 " onClick={handalLowCase}>ToLowerCase</div>
                <div className="btn btn-primary mx-1 my-1 " onClick={handalClear}>Clear Text</div>
                <div className="btn btn-primary mx-1 my-1 " onClick={handalCoppy}>Coppy Text</div>
                <div className="btn btn-primary mx-1 my-1 " onClick={handalExtraSpaces}>Remove Extra Spaces</div>

            </div>

            <div className="container my-4">
                <h2>Text Summery Is Here.</h2>
                <p>{text.split(" ").length - 1} words and {text.length} Characters </p>
            </div>


            <div className="container  p-3" style={{ color: `${props.mode === "light" ? "black" : "white"}`, backgroundColor: `${props.mode === "light" ? "white" : "#121140"}`, border: "1px solid gray", borderRadius: "10px" }}>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter Your Text To Above Box And Preview Here."}</p>
            </div>





        </div>
    )
}
