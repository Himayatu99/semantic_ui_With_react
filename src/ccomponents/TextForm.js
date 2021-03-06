import React, { useState } from 'react'
import { TextArea, Button, Icon } from "semantic-ui-react";
function TextForm(props) {
    const headleOnClick = () => {
        // console.log("upperCase are clicked..." + text)
        const newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (c) => {
        // console.log("on change")
        setText(c.target.value)
    }
    const handleOnClick = () => {
        const textChange = text.toLowerCase()
        setText(textChange)
    }
    const handleClear = () => {
        const textClear = "";
        setText(textClear)
    }
    const handleCopy = () => {
        const copy = document.getElementById('mybox')
        copy.select();
        navigator.clipboard.writeText(copy.value)
    }
    // Remove Extra spaces 
    const handleExtraSpaces = () => {
        const extraSpaces = text.split(/[ y]+/)
        setText(extraSpaces.join(''))
    }

    const [text, setText] = useState('Welcome')
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className=''>
                    <TextArea value={text} id="mybox" rows='10' onChange={handleOnChange} />
                </div>

                <Button color='red' onClick={headleOnClick}>
                    <Icon name='arrow up' />
                    convert to Uppercase
                </Button>
                <Button color="red" onClick={handleOnClick}>
                    <Icon name="arrow up" />
                    convert to LowerCase
                </Button>
                <Button color='red' onClick={handleClear}>
                    <Icon name='trash' />
                    Clear
                </Button>
                <Button color='red' onClick={handleCopy}>
                    <Icon name='copy' />
                    Copy Text
                </Button>
                <Button color='red' onClick={handleExtraSpaces}>
                    <Icon name='erase' />
                    Remove Extra spaces
                </Button>

            </div>
            <div>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length}  charactor</p>
                <p>{0.008 * text.split("").length} Mintues Read</p><br />
                <h2>Preview</h2>
                <p>{text.length > 7 ? text : "Enter some thing to preview it here"}</p>
            </div>
        </>

    )
}

export default TextForm
