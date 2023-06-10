import React, {Fragment, useEffect, useState} from 'react';
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { Col, Container, Row, Card, Button, Modal } from 'react-bootstrap';
import ShowFood from '../ShowFood/ShowFood';
import EditFood from '../EditFood/EditFood';
import DeleteFood from '../DeleteFood/DeleteFood';
import { Link } from 'react-router-dom';
const axios = require("axios").default;



const Home = () => {
    const [food, setFood] = useState([]);
    const [itemID, setItemID] = useState(0);
    const [show, setShow] = useState(false);

    const showModalClose = () => setShow(false);
    const showModalOpen = (sID) =>{
        setShow(true);
        setItemID(sID);
    }

    const [eshow, setEShow] = useState(false);
    const editModalClose = () => setEShow(false);
    const editModalOpen = (eID) =>{
        setEShow(true);
        setItemID(eID);
    }


    const [dshow, setDShow] = useState(false);
    const deleteModalClose = () => setDShow(false);
    const deleteModalOpen = (dID) =>{
        setDShow(true);
        setItemID(dID);
    }



    const foodData = async () =>{
        const allFood = await axios({
            method: "GET",
            header: {"accept": "application/json"},
            url: `https://61d28de1da87830017e59623.mockapi.io/food/`
        }).then(response=>{
            setFood(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    useEffect(() => {
        foodData();
    }, []);

    return (
            <Fragment>
                <Container>
                        <div className='d-flex align-items-center justify-content-between py-3'>
                            <h2 className='text-center'>Home</h2>
                            <Link to="/add" className='btn btn-primary'>Add Item</Link>
                        </div>
                        
                        <Row>
                            {
                                food.map((result)=>(
                                    <Col lg={3} sm={6} key={result.index}>
                                        <Card style={{marginBottom: "20px"}}>
                                            <Card.Img variant="top" src={result.product_image} />
                                            <div className="button_part">
                                                <Button variant='success' onClick={()=>{showModalOpen(result.id)}}><FaEye/></Button>
                                                <Button variant='primary' onClick={()=>{editModalOpen(result.id)}}><FaEdit/></Button>
                                                <Button variant='danger' onClick={()=>{deleteModalOpen(result.id)}}><FaTrashAlt/></Button>
                                            </div>
                                            <Card.Body>
                                                <div className="text-primary">Price: {result.product_price} $</div>
                                                <Card.Title>{result.product_title.substr(0, 20)}</Card.Title>
                                                <Card.Text>
                                                    {result.product_subtitle.substr(0, 60)}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                </Container>


                <Modal show={show} onHide={showModalClose} animation={false}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <ShowFood sID={itemID}></ShowFood>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={showModalClose}>Close</Button>
                        <Button variant="primary" onClick={showModalClose}>Save Changes</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={eshow} onHide={editModalClose} animation={false}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <EditFood eID={itemID}></EditFood>
                    </Modal.Body>
                </Modal>


                <Modal show={dshow} onHide={deleteModalClose} animation={false}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <DeleteFood dID={itemID}></DeleteFood>
                    </Modal.Body>
                </Modal>
            </Fragment>
    );
}

export default Home;
