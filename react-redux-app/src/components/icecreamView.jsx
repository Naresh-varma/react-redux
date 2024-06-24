import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { icecream } from '../features/icecreamSclice';

export const IcecreamView = () => {
    const noOfIceCreams = useSelector((state) => state.icecream.noOfIceCreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>icecream: {noOfIceCreams}</h1>
            <button onClick={() => dispatch(icecream.ordered())}>order icecream</button>
            <button onClick={() => dispatch(icecream.restock(2))}>restock icecream</button>
        </div>
    )
}