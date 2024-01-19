import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

function AddNote() {
  const {id} = useParams();
  console.log(useParams())
  const [heading, setHeading] = useState("");
  const [task, setTask] = useState("");
  const [loader,setLoader] = useState(false)

  const navigate = useNavigate();

  useEffect(() => async() => {
    console.log("id",id)
      if(id) {
        // Make a POST request to your API here
        await fetch(`/notes/${id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("Data : ", data);
            setHeading(() => data.heading)
            setTask(() => data.note)
            setLoader(false)
          })
          setLoader(false)
          }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true)

    const taskData = {
      "heading" : heading ,
      "note" : task
    };
    
    if(id) {
       taskData.id = id;
    }

    // Make a POST request to your API here
    fetch("/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data posted:", data);
        toast.success("Task added successfully!")
        setLoader(false)
        navigate("/")
      })
      .catch((error) => {
        setLoader(false)
        console.error("Error while posting :", error);
        toast.error("Something went wrong!")
      });
      setLoader(false)
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6}>
          <h1 className="mb-4">Add Task</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formHeading">
              <Form.Label>Heading</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTask">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
              />
            </Form.Group>

            <Link to="/">
              <Button variant="danger" type="reset" disabled={loader} className="my-2 mx-2">
                Back
              </Button>

            </Link>
            <Button variant="primary" type="submit" disabled={loader} className="my-2">
              Submit {loader ? <Spinner/> : ""}
            </Button>

          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddNote;
