import React, { useEffect, useState } from 'react';
import { Button} from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom'
export const ReadData = () => {

    const [apidata, setApiData] = useState([])

    useEffect(() => {
        axios.get(`https://613eecb0e9d92a0017e17334.mockapi.io/FakeUsers`)
            .then((response) => {
                setApiData(response.data)
            })
    }, [])

    const setData = (data) => {
        console.log(data)
        localStorage.setItem('ID',data.id)
        localStorage.setItem('Name',data.name)
        localStorage.setItem('Email',data.email)
        localStorage.setItem('Contact',data.contact)
        localStorage.setItem('Password',data.password)
        localStorage.setItem('TC',data.check)
    }
    return (
        <div className="mt-5 pt-5 mb-5 mx-auto container">
            <table className="table table-hover">
                <caption className="text-center">List of FAKE API Records</caption>
                <thead>
                    <tr className="table-dark">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>T&C</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {apidata.map((data) => {
                        return (
                        <tr className="table-light">
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.contact}</td>
                            <td>{data.check? 'Accepted' : 'Declined'}</td>
                            <td>
                                <Link className="text-decoration-none" to="/update">
                                    <Button onClick={() => setData(data)} variant="contained" color="primary" size="small">Update</Button>
                                </Link>
                            </td>
                            <td>
                                <Link className="text-decoration-none" to="/read">
                                    <Button variant="contained" color="secondary" size="small">Delete</Button>
                                </Link>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
}
//to="/update"