import React, { useState } from "react"
import { Card, Image, Icon, Button } from "semantic-ui-react";
const Accordion = () => {
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })
    const [btntext, setBtnText] = useState('Enble Dark Mode');
    const toogleStyle = () => {
        if (myStyle.color == 'black') {
            setMyStyle(
                {
                    color: 'white',
                    backgroundColor: "black",
                    border: "10px soild white"

                }
            )
            setBtnText("Enable Light Mode")
        }
        else {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setBtnText("Enble Dark Mode")
        }
    }


    return (
        <Card className="container" >
            <Card.Content >
                <Card.Header style={myStyle}>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date' style={myStyle}>Joined in 2015</span>
                </Card.Meta>
                <Card.Description style={myStyle}>
                    Matthew is a musician living in Nashville.
                </Card.Description>
            </Card.Content>
            <Card.Content extra style={myStyle}>
                <a style={myStyle}>
                    <Icon name='user' style={myStyle} />
                    22 Friends
                </a>
            </Card.Content>
            <Button color="red" onClick={toogleStyle}>
                {btntext}
            </Button>
        </Card>
    )
}
export default Accordion;