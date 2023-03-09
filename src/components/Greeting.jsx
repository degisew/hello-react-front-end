import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchGreets} from "../reux/Greets/greetReducer";
const Greeting = () => {
    const random = Math.floor(Math.random() * 5);
    const  message = useSelector(state => state.greetReducer);
    const dispatch = useDispatch();
     useEffect(
    ()=> {
        dispatch(fetchGreets);
    }, [dispatch]
)
    return (
        <>
            {message.greets.length === 0 ?  (<h5>Loading...</h5>) : (<h3>{message.greets[random].text}</h3>) }
        </>
    );
}

export { Greeting };