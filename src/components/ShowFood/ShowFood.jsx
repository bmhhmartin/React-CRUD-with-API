import axios from 'axios';
import React, { Fragment, useState, useEffect } from 'react';

const ShowFood = (props) => {
    const [showItem, setShowItem] = useState([]);
    const showID = props.sID;
    console.log(showID);

    const showFood = async () =>{
        const allFood = await axios({
            method: "GET",
            header: {"accept": "application/json"},
            url: `https://61d28de1da87830017e59623.mockapi.io/food/${showID}`
        }).then(response=>{
            setShowItem(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }
 
    useEffect(() => {
        showFood();
    }, [])

    return (
        <Fragment>
            <div className='showCard'>
                <h3>Show Food</h3>
                <div>
                    <img src={showItem.product_image} className='img-fluid' alt={showItem.product_title} />
                </div>
                <h4>Price: {showItem.product_price} $</h4>
                <h5>{showItem.product_title}</h5>
                <h6>{showItem.product_subtitle}</h6>
            </div>
        </Fragment>
    );
};

export default ShowFood;