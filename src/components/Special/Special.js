import { useContext } from "react";
import { RingContext } from '../Grandpa/Grandpa';


const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h5>Special</h5>
            <p><small>Gift:{house} house</small></p>
            <button onClick={() => setHouse((prevState) => (prevState + 1))}>Buy a house</button>
        </div>
    );
};

export default Special;