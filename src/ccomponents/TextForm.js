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
            </div>
            <div>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length}  charactor</p>
                <p>{0.008 * text.split("").length} Mintues Read</p><br />
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>

    )
}

export default TextForm
