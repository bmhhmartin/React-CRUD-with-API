import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router';
const axios = require('axios').default;

const DeleteFood = (props) => {
    const delID = props.dID;
    const [delFood, setdelFood] = useState([]);
    const navigate = useNavigate();
    
    

    const deleteFood = async () =>{
        const allFood = await axios({
            method: 'GET',
            header: {"accept" : "application/json"},
            url: `https://61d28de1da87830017e59623.mockapi.io/food/${delID}`
        }).then(response=>{
            setdelFood(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }
    
    useEffect(() => {
        deleteFood();
    }, []);

    const deleteHandler = async (e) =>{
        e.preventDefault();
        try{
            const deleteAll = await axios({
                method: 'DELETE',
                header: {"accept" : "application/json"},
                url: `https://61d28de1da87830017e59623.mockapi.io/food/${delID}`
            })
            navigate('/');
            console.log("click")
        }catch (error){
            console.log(error);
        }
    }

    return (
        <div>
            <Form onSubmit={deleteHandler}>
                <div className='text-center my-3'>
                    <img src={delFood.product_image} className='img-fluid' style={{maxWidth: '200px'}} alt="Food"/>
                </div>
                <h6 className='text-center py-2'>{delFood.product_title}</h6>
                <h2 className='text-center text-danger'>Confirm Delete ? <Button variant='danger' type='submit'>Yes</Button></h2>
            </Form>
        </div>
    );
};

export default DeleteFood;