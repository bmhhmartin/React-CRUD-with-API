import React, {Fragment, useEffect, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router';
const axios = require("axios").default;

const Login = () => {
    const [food, setFood] = useState([]);
    const navigate = useNavigate();
    const [adminEmail, setaEmail] = useState('');

    const foodData = async () =>{
        const allFood = await axios({
            method: "GET",
            header: {"accept": "application/json"},
            url: `https://61d28de1da87830017e59623.mockapi.io/admin`
        }).then(response=>{
            setFood(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    useEffect(() => {
        foodData();
    }, []);



    const aEmail = (e) =>{
        setaEmail(e.target.value);
        console.log(e.target.value);
    }
 
    const loginHandle = (e) =>{
        e.preventDefault();
        if(food.admin_name == aEmail){
            console.log("Match");
            navigate('/home')
        }else{
            console.log("Wrong Email");
        }
    }


    return (
        <div className='loginForm'>
            <h2 className='text-center mb-3'>Login</h2>
            <Form onSubmit={loginHandle}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" onChange={aEmail}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Button variant='success' type='submit'>Login</Button>
                
            </Form>
        </div>
    );
};

export default Login;