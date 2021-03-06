import React, { createContext, useState } from 'react';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

//context api:
//1.call createContext with a default value;
//2.set a variable of the context with upppercase.
//Make sure you export the context to use it in other places.
//4.Wrap your child content using RingContext.Provider.
//5.Provide a value.
//6.to consume the context from child component.
//7.Wrap your consumer content using RingContext.Consumer and use render prop pattern on it.
//or
//7.useContext hook and you will need to pass the ContextName.

export const RingContext = createContext('diamond');

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    // const ornament = 'Diamond Ring';

    const handleBuyAHouse = () => {
        setHouse((prevState) => (prevState + 1));
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h4>Grandpa</h4>
                <p>house: {house}<button onClick={handleBuyAHouse}>Buy A House</button></p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;