import { useState } from "react";

const ItemCount = () => {

    const [conta, setConta] = useState(0);

    const clickHandler = () => {
        setConta(conta + 1);
    };
    const clickHandlerResta = () => {
        conta > 0 ? setConta(conta - 1) : '';

    };

    return (
        <div className="cont">
            <button onClick={clickHandlerResta}>-</button>
            {conta}
            <button onClick={clickHandler}>+</button>
            <button>Agregar al Carrito</button>
        </div>
    );

}
export default ItemCount;