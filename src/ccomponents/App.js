import { List, Container, Input } from "semantic-ui-react";
import './style.css'
const App = () => {
    return (
        <Container>
            {/* For List */}
            <List >
                <List.Item >Apple</List.Item>
                <List.Item >Orange</List.Item>
                <List.Item>Banana</List.Item>
            </List>
            <Input focus placeholder="Seaching......" loading icon='user' />

        </Container>

    )
}

export default App;
