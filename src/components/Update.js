import React, { useState, useEffect } from 'react';
import { TextField, Grid, Button, Checkbox } from '@material-ui/core';
import '../App.css';
import axios from 'axios';

export const Update = () => {

    const [id, setId] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [contact ,setContact] = useState(0);
    const [check, setCheck] = useState()

    const localname = localStorage.getItem('Name')

    useEffect(() => {
        setId(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'))
        setEmail(localStorage.getItem('Email'))
        setPassword(localStorage.getItem('Password'))
        setContact(localStorage.getItem('Contact'))
        setCheck(localStorage.getItem('TC'))
    },[])

    const updateData = () =>{
        axios.put(`https://613eecb0e9d92a0017e17334.mockapi.io/FakeUsers/${id}`, {
            name,
            email,
            password,
            contact,
            check
        })
        alert('Record Updated SuccessFully')
    }
    return (
        <div className="text-center mt-4 mb-4 pb-2 pt-2">
            <form className="crud-form text-center pt-3 pb-3" >
                <p>Update your FAKE Record <span className="text-primary font-italic">{localname}</span></p>
                <div className="crud-form-field">
                    <Grid>
                        <TextField id="name" label="Name" required 
                        onChange={(event) => setName(event.target.value)}
                        />
                    </Grid>
                </div>
                <div className="crud-form-field">
                    <Grid>
                        <TextField id="email" label="Email ID" type="email" required 
                        onChange={(event) => setEmail(event.target.value)}
                        />
                    </Grid>
                </div>
                <div className="crud-form-field">
                    <Grid>
                        <TextField id="password" label="Password" type="password" required 
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </Grid>
                </div>
                <div className="crud-form-field">
                    <Grid>
                        <TextField id="contact" label="Contact" type="number" required 
                        onChange={(event) => setContact(event.target.value)}
                        />
                    </Grid>
                </div>

                <Grid>
                    <p className="terms">
                        <Checkbox
                            color="primary"
                            size="small"
                            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} required
                            onChange={(event) => setCheck(check  ? check : !check)}
                        />
                        I Accept Terms & Conditions
                    </p>
                </Grid>

                <div className="crud-form-field">
                    <Grid>
                        <Button variant="contained" color="primary" onClick={updateData} size="medium">Update</Button>
                    </Grid>
                </div>
            </form>
        </div>
    )
}