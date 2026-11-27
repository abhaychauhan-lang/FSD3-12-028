import { useState } from "react";
import MyButton from "./MyButton";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [isLogin,setLogin] = useState(false);
  // if else by terniary o/p
  return isLogin ? <Home setLogin = {setLogin} /> : <Login setLogin = {setLogin} />;

  //if else by ternary o/p
  // return isLogin ? <Home/>:<Login/>;

  //agar ye hai to woh hoga
  // return isLogin && <Home/>; 

  // return isLogin || <Login/>; 
}

export default App;