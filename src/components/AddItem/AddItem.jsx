import React, {Fragment, useEffect, useState} from 'react';
import {Form, Button} from 'react-bootstrap';
const axios = require('axios').default;

const AddItem = () => {
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubTitle] = useState('');

    const inputPrice = (e)=>{
        e.target.name = "priceName";
        setPrice(e.target.value);
        console.log(price);
    }
    const inputTitle = (e)=>{
        e.target.name = "titleName";
        setTitle(e.target.value);
    }
    const inputSubTitle = (e)=>{
        e.target.name = "areaName";
        setSubTitle(e.target.value);
    }

    const submitData = async (e) =>{
        e.preventDefault();
        try{
            const allData = await axios({
                method: 'POST',
                header: {'accept': 'application/json'},
                url: 'https://61d28de1da87830017e59623.mockapi.io/food/',
                data:{
                    product_price: price,
                    product_title: title,
                    product_subtitle: subtitle,
                }
            })
            console.log(allData);
        }catch(error){
            console.log(error);
        }
    }



    return (
        <div>
            <h2 className='text-center text-success'>Add Item</h2>
            <Form className='loginForm' onSubmit={submitData}>
                <Form.Group className="mb-3">
                    <Form.Label>Item Price</Form.Label>
                    <Form.Control type="number" onChange={inputPrice} name="priceName"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Item Title</Form.Label>
                    <Form.Control type="text" onChange={inputTitle} name="titleName"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Item Subtitle</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={inputSubTitle} name="areaName"/>
                </Form.Group>
                <Button variant='warning' type='submit'>Add Item</Button>
            </Form>
        </div>
    );
};

export default AddItem;