import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cake } from '../features/cakeSclice';

export const CakeView = () => {
    const noOfCakes = useSelector((state) => state.cake.noOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Cakes: {noOfCakes}</h1>
            <button onClick={() => dispatch(cake.ordered())}>order cake</button>
            <button onClick={() => dispatch(cake.restock(2))}>restock cake</button>
      </div>
    )
}