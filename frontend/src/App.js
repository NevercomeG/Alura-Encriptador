import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import axios from "axios";

import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm";
import Header from "./components/Header/Header";
import Encryptor from "./components/Encryptor/Encryptor"

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("/api/todos/")
      .then((res) => {
        setTodos(res.data)
      }).catch(() => {
        alert("Something went wrong");
      })
  }, [])


  return (
    <div>
      <Container>

      <Header/>

      </Container>
      
      <Navbar bg="light" style={{ marginBottom: "20px" }}>
        <Container>
          <Navbar.Brand href="#">
            Todo App
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    
      <Container>
          <Encryptor/>

      </Container>


    </div>
  );
}

export default App;