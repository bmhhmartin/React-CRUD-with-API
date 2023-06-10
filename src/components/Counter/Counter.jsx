import React from 'react';
import {Container, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/state/Counter/CounterSlice';


const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector((state)=>state.counter.value);

    return (
        <Container>
            <h1>{count}</h1>
            <Button onClick={()=>dispatch(increment())} variant='success'>Increment</Button>
            <Button onClick={()=>dispatch(decrement())} variant='danger'>Decrement</Button>
        </Container>
    );
};

export default Counter;