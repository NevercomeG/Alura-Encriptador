import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Inputgroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

export default function TodoForm(){

        const [name, setName] = useState("");

        const handleChange = e => {
            setName(e.target.value);
        }

    return <Form>
        <Inputgroup clasName =" mb-4">
            <FormControl placeholder="New Todo" onchange={handleChange} value={name}/>
            <Button type="submit">
                Add
            </Button>
        </Inputgroup>
    </Form>
}