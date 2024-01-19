import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import ShowNote from "./ShowNote";

export default function Dashboard() {
    const [EmployeeData, setEmployeeData] = useState([]);
    const [empId, setEmpId] = useState(0)
    const [loader, setLoader] = useState(true)
    const [Removeloader, setRemoveLoader] = useState({
        status: false,
        empId: 0
    })
    const API_URL = process.env.REACT_APP_API_URL;

    const getTaskData = async () => {
        try {
            setLoader(true)
            const response = await fetch("/notes");
            const data = await response.json();
            setLoader(false)
            setEmployeeData(data);
        } catch (error) {
            setLoader(false)
            console.error("Error while fetching records : ", error)
            toast.error("Something went wrong!")
        }
    }

    const removeTask = async (note) => {
        try {

            setRemoveLoader(() => ({ status: true, empId: note.id }))
            const response = await fetch(`/notes/${note.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            toast.success("Task removed!")
            await getTaskData()
            setRemoveLoader({ status: false, empId: 0 })
        } catch (error) {
            setRemoveLoader({ status: false, empId: 0 })
            console.error("Error while removing employee", error)
            toast.error("Something went wrong!")
        }
    }

    useEffect(() => {
        getTaskData()
    }, [])

    return (
        <div className="container-flex" style={{marginLeft : '2rem'}} >
            <div className="header">
                <h2 className="my-2">Task Manager</h2>
            </div>
            <div>
                <div className="d-flex justify-content-between">
                    <div>
                        <Link to='/addnote'>
                            <Button variant="dark" className="my-2 add-note-btn">Add Note</Button>
                        </Link>
                    </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap',margin :0}} >
                    {loader ? <div className="text-center"><Spinner /></div> :
                        EmployeeData && EmployeeData.length > 0 ?
                            EmployeeData.map((note) => (
                            <Card style={{ width: '18rem' }} className='m-1'>
                                <Card.Body>
                                    <Card.Title>{note.heading}</Card.Title>
                                    <Card.Text>
                                    {note.note}
                                    </Card.Text>
                                    <Link to={`/addnote/${note.id}`} className="mx-2">
                                        <Button variant="primary" >Edit task</Button>
                                    </Link>
                                    <Button variant="danger" onClick={() => removeTask(note)}>Remove</Button>
                                </Card.Body>
                                </Card>                                
                            )) : <p>No data found</p>
                    }
                </div>
            </div>
        </div>
    )
}
