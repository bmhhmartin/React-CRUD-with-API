import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
const axios = require('axios').default;

const EditFood = (props) => {
    const editID = props.eID;
    const [getFood, setGetFood] = useState([]);
    const [getEPrice, setGetEPrice] = useState(0);
    const [getTitle, setGetTitle] = useState('')
    const [getSubTitle, setGetSubtitle] = useState('')


    const editFood = async () =>{
        const allFood = await axios({
            method: 'GET',
            header: {"accept" : "application/json"},
            url: `https://61d28de1da87830017e59623.mockapi.io/food/${editID}`
        }).then(response=>{
            setGetFood(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }
    useEffect(() => {
        editFood();
    }, []);

    const ePrice = (e) =>{
        setGetEPrice(e.target.value);
        getFood.product_price = e.target.value;
    }

    const eTitle = (e) =>{
        setGetTitle(e.target.value);
        getFood.product_title = e.target.value;
    }

    const eSubTitle = (e) =>{
        setGetSubtitle(e.target.value);
        getFood.product_subtitle = e.target.value;
    }

    const editHandler = (e) =>{
        e.preventDefault();
        try{
            const allEdit = axios({
                method: 'PUT',
                header: {'accept': 'application/json', "Content-Type": "multipart/form-data"},
                url: `https://61d28de1da87830017e59623.mockapi.io/food/${editID}`,
                data: {
                    product_title: getTitle,
                    product_subtitle: getSubTitle
                }
            })
            console.log(allEdit);
        }catch (error){
            console.log(error);
        }
    }

    


    return (
        <div>
            <h2 className='text-center text-success'>Edit Food</h2>
            <Form onSubmit={editHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" defaultValue={getFood.product_price} onChange={ePrice}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" defaultValue={getFood.product_title} onChange={eTitle}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Details</Form.Label>
                    <Form.Control as="textarea" rows={3} defaultValue={getFood.product_subtitle} onChange={eSubTitle}/>
                </Form.Group>
                <Button variant='success' type='submit'>Update Data</Button>
            </Form>
        </div>
    );
};

export default EditFood;