import { useState } from "react"


export default function Formbox(props) {

    const [text, setText] = useState("Enter your text here..");

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

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handalOnChnage} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>

            <div className="container">
                <div className="btn btn-primary " onClick={handalUpCase}>ToUpperCase</div>
                <div className="btn btn-primary mx-2" onClick={handalLowCase}>ToLowerCase</div>
                <div className="btn btn-primary mx-2" onClick={handalLowCase}>ToUpperCase</div>
                <div className="btn btn-primary mx-2" onClick={handalUpCase}>ToUpperCase</div>
                <div className="btn btn-primary mx-2" onClick={handalUpCase}>ToUpperCase</div>
            </div>


        </div>
    )
}
