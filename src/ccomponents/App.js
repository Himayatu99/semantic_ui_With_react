import { List, Container, Button, Icon, Label } from "semantic-ui-react";
import './style.css'
const App = () => {
    return (
        <Container>
            {/* For List */}
            <List >
                <List.Item >Apple</List.Item>
                <List.Item >Orange</List.Item>
                <List.Item>Banana</List.Item>

                <List.Item>
                    <List.Icon name="users">
                        User
                    </List.Icon>
                </List.Item>

                <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>Peshawer,Pk</List.Content>
                </List.Item>

                <List.Item>
                    <List.Icon name="mail" />
                    <List.Content><a href="mailto:khanjan">khanjan@gamail.com</a></List.Content>
                </List.Item>


            </List>
            {/* <Input focus placeholder="Seaching......" icon='user' /> */}

            <Button labelPosition='right'>
                <Button color="red">
                    <Icon name="heart" />
                    khan
                </Button>
                <Label basic color="red" pointing="left">303</Label>
            </Button>
            <Button labelPosition='right'>
                <Button basic color='blue'>
                    <Icon name='fork' />
                    Fork
                </Button>
                <Label basic color='blue' pointing='left'>
                    12121
                </Label>
            </Button>
        </Container>

    )
}

export default App;
