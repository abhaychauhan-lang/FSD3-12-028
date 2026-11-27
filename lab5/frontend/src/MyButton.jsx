import { useState } from 'react';

const MyButton = () => {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <p>Click on the button</p>
            <h2>Button Clicked: {count}</h2>

            <button onClick={handleIncrement}>Increase</button>
            <button onClick={handleDecrement}>Decrease</button>
        </div>
    );
};

export default MyButton;