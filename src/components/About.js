import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setstyle] = useState({
    //     backgroundColor: "white",
    //     color: "black",
    // });

    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // let togglemode = () => {
    //     if (myStyle.color === "white") {
    //         setstyle({
    //             backgroundColor: "white",
    //             color: "black",
    //             border: "1px solid gray",
    //         })
    //         setBtnText("Enable Dark Mode")
    //     } else {
    //         setstyle({
    //             backgroundColor: "black",
    //             color: "white",
    //             border: "1px solid white",
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }

    // props.togglemode()



    return (
        <div style={{ marginTop: "4rem" }} >
            <div className="accordion " id="accordionExample" >
                <div className={`accordion-item bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>1. User-Friendly Text Manipulation:</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>My text editor web app,</strong> built using React, offers a simple and user-friendly interface for manipulating text. With just a few clicks, users can effortlessly convert text to uppercase or lowercase. This feature is particularly useful when dealing with text formatting tasks, such as creating headings or emphasizing specific content. By providing an intuitive and accessible way to change letter case, my app streamlines the text editing process and enhances overall user productivity.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>2. Enhanced Text Cleanup and Organization:</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Another essential feature of my text editor web app</strong> is the ability to remove extra spaces from the text. This function comes in handy when users need to clean up their text before sharing it with others, posting it on social media, or using it in professional documents. The feature ensures that the text is well-organized and free from any unintended spacing issues. By facilitating text cleanup with a single click, my app saves users valuable time and effort, making it a valuable tool for both casual users and content creators.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>3. Seamless Copying and Clearing of Text:</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Copy-pasting text is a routine task,</strong> and my text editor web app streamlines this process by providing a straightforward "Copy Text" option. With just one click, users can easily copy the edited text to their clipboard and use it wherever they need. Additionally, the "Clear Text" feature allows users to wipe the text area instantly, offering a clean slate for new content. These convenient functionalities enhance the user experience by eliminating unnecessary steps and simplifying everyday text manipulation tasks.
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="btn btn-primary my-2" onClick={togglemode}>{btnText}</div> */}

            <div className={` my-4  text-${props.mode === "light" ? "dark" : "light"}`}>
                <div >
                    <div>
                        <strong>Overall,</strong> My text editor web app aims to empower users with essential text editing tools while keeping the interface intuitive and easy to navigate. Whether it's for professional writing, social media updates, or personal notes, the app equips users with the necessary features to efficiently modify and manage their text content.
                    </div>
                </div>
            </div>
        </div>
    )
}
