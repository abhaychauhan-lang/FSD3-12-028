import React from 'react'

const MyButton = () => {
    let click = 0;

    function handleClick(){
        alert("button clicked");
        click++;
        console.log("Button clicked:", click);
    }

  return (
    <div>
        <p>Click on the button</p>
        <h2>Button Clicked :{click}</h2>
        <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default MyButton