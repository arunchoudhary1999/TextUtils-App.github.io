import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("Converted To UpperCase!", "success");
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase(); 
        setText(newText);
        props.showAlert("Converted To LowerCase!", "success");
    };

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Clear Text Inside the Textbox!", "success");
    };

    const capitalizeFirstLet = () => {     
        let firstLett = text.charAt(0);
        let newLetter= firstLett.toUpperCase(); 
        setText(newLetter+text.slice(1)); 
        props.showAlert("Converted To First Letter Capital!", "success");
    };

    const handleSentClick = () => {
        let splitWord = text.split("");
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
        setText(newText);
        props.showAlert("Convert All words in Reverse Form!", "success");
    };

    const handleCopy = () => {
        var newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("All Text Copy!", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove the Extra Space in Words!", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value)
    };

    return (
        <>
            <div className="container" style={{color: (props.mode === 'light'? 'grey' : 'white')}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Enter Text Here" style={{backgroundColor: (props.mode === 'dark'? 'grey' : 'white'), color: (props.mode === 'light'? 'grey' : 'white')}} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary my-1 mx-2" onClick={handleUpClick}>Convert to Upppercaae</button>
                <button className="btn btn-primary my-1 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-1 mx-2" onClick={capitalizeFirstLet}>Convert to capitalizeFirstLetter</button>
                <button className="btn btn-primary my-1 mx-2" onClick={handleSentClick}>Convert to ReverseSenetence</button>
                <button className="btn btn-primary my-1 mx-2" onClick={handleCopy}>Copy All Text</button>
                <button className="btn btn-primary my-1 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary my-1 mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="container my-3" style={{color: (props.mode === 'light'? 'grey' : 'white')}}>
                <h2>Your text Summary</h2>
                <p> {text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Previous</h2>
                <p>{text.length>0?text:"Enter Something In The Textbox Above To Previous It Here"}</p>
            </div>
        </>
    );
};