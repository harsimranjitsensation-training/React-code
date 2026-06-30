import { useContext } from "react";
import UserContext from "../context/UserContext";

function Home(){
    const user_name = useContext(UserContext);
  return (
    <>
    <h1>Name is {user_name}</h1>
    </>
  )
}

export default Home;