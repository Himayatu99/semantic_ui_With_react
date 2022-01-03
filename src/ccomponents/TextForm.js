import React, { useState } from 'react'
import { List, TextArea, Button, Icon } from "semantic-ui-react";
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
    const [text, setText] = useState()
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className=''>
                <TextArea value={text} id="mybox" rows='10' onChange={handleOnChange} />
            </div>

            <button className="ui button" onClick={headleOnClick}>convert to Uppercase</button>
            <Button color="red" onClick={handleOnClick}>
                <Icon name="heart" />
                convert to LowerCase
            </Button>

            <List.Item>
                <List.Icon name="users">
                    User
                </List.Icon>
            </List.Item>

        </div>
    )
}

export default TextForm
