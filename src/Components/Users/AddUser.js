import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const AddEventHandles = (event) => {
        event.preventDefault();
        if (enteredUsername.trim() === 0 || enteredAge.trim() === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    };
    return (
        <Card className={classes.input}>
            <form onSubmit={AddEventHandles}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor="age">Age(Year)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                <Button type="submit">Create</Button>
            </form>
        </Card>
    );
};
export default AddUser;