import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h4>Aunty</h4>
            <p>house:{house}</p>
            {house > 4 && <button onClick={() => setHouse((prevState) => (prevState + 1))}>Add a house</button>}
        </div>
    );
};

export default Aunty;