import React from 'react'
import image from '../components/image.png';
import { Link } from "react-router-dom"

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
        <div className="row" style={{ marginTop: "4rem" }} >
            <h1 className={` mb-3 text-${props.mode === "dark" ? "light" : "dark"}`}>About TextEditor</h1>

            <div className="accordion col-sm-8 " id="accordionExample" >

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

                <div className={`accordion-item bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>4. Intuitive User Interface:</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>The Text Editor</strong> Web App boasts an intuitive and clean user interface, making it easy for users of all skill levels to navigate and utilize its features. The layout is thoughtfully designed to ensure a smooth editing experience, with clear instructions and visually appealing buttons for each function. Users will find it effortless to interact with the application and perform text transformations without any confusion.
                        </div>
                    </div>
                </div>

                <div className={`accordion-item bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>5. Real-time Text Editing:</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>One of the standout features</strong> of this text editor is its real-time text editing capability. As users type or paste text into the input area, the editor immediately applies the selected transformations, providing instant feedback on the changes. This feature enables users to preview the modified text in real-time, ensuring they achieve the desired outcome before finalizing their edits.
                        </div>
                    </div>
                </div>

                <div className={`accordion-item bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>6. Responsive Design:</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>To cater to users across various devices and screen sizes,</strong> the Text Editor Web App incorporates a responsive design. Whether accessed from a desktop, laptop, tablet, or mobile phone, the app adapts to different screen resolutions, maintaining its usability and functionality. Users can conveniently edit text on the go, making it a versatile tool for any situation.
                        </div>
                    </div>
                </div>

                <div className={`accordion-item bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>7. Regular Updates and Support:</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>As the developer of this Text Editor,</strong> committed to providing regular updates and ongoing support to ensure the application remains functional and bug-free. User feedback is highly valued, and gauravssah actively encourages users to share their suggestions, report issues, and contribute to the app's improvement. Together, they can continue to enhance the app's features and maintain its relevance as a valuable text editing tool.
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


            <div className="col-sm-4 d-flex justify-content-center" >

                <div className={`card `} style={{ width: "22rem" }} >

                    <img src={image} className="card-img-top  border " alt="Image" />

                    <div className={`card-body text-${props.mode === "dark" ? "light" : "dark"} bg-${props.mode} `}>
                        <h3 className="card-title">Gaurav Sah</h3>
                        <p className="card-text"><strong>"</strong>Embracing the art of coding, I craft digital realms with passion and precision. From elegant algorithms to captivating user experiences, I breathe life into web applications. Each line of code is a brushstroke of creativity, building a masterpiece of technology. As a coding enthusiast, I revel in the challenges, and with unwavering dedication, I turn ideas into reality.<strong>"</strong></p>
                    </div>

                    <div className={`socialMedia card-body border d-flex justify-content-center text-${props.mode === "dark" ? "light" : "dark"} bg-${props.mode}`}>
                        <Link to="https://www.linkedin.com/in/gauravssah/" target="_blank" ata-toggle="tooltip" data-placement="top" title="Click To Visit" className={`card-link text-decoration-none text-${props.mode === "dark" ? "light" : "dark"}`}>Linkedin</Link>
                        <Link to="https://github.com/gauravssah" target="_blank" ata-toggle="tooltip" data-placement="top" title="Click To Visit" className={`card-link text-decoration-none text-${props.mode === "dark" ? "light" : "dark"}`}>GitHub</Link>
                        <Link to="https://twitter.com/gauravssah" target="_blank" ata-toggle="tooltip" data-placement="top" title="Click To Visit" className={`card-link text-decoration-none text-${props.mode === "dark" ? "light" : "dark"}`}>Twitter</Link>
                    </div>
                </div>

            </div>


        </div>
    )

}
