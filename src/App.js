import React, { useState, } from 'react';
import { Form, Header, Container, List, Segment } from "semantic-ui-react"

const App = () => {
  const [todos, setTodo] = useState([])
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
     ([name, ...todos])
    setName("")
  }

  return (
    <Container>
      <Segment textAlign="center">
        <Header as="h3">Todo List</Header>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Form>
        <List>
          { todos.map( ( todo, i) => <List.Item key={i}>{todo}</List.Item>) }
        </List>
      </Segment>
    </Container>
  )
}
export default App;
