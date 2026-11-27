import React from 'react';
//using rafce
const Home = ({setLogin}) => {
    const handleLogout = () => {
        setLogin(false);
    };
    return (
    <>
    <h1>Home Page</h1>
    <h2>You are Logged in</h2>
    <button onClick={handleLogout}>Logout</button>
    </>
    );
};

export default Home;