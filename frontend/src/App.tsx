import "./App.css";
import { useEffect, useState } from "react";
import Name from "./components/Name";
import Header from "./components/Header";
import Signup from "./components/Signup";

function App(): JSX.Element {
  const [data, setData] = useState([]);
  useEffect(() => {
    window
      .fetch("http://127.0.0.1:3000/users")
      .then((res) => {
        console.log("hello", res);
        return res.json();
      })
      .then((resjson) => {
        console.log("hii", resjson);
        setData(resjson.data);
      });
  }, []);

  return (
    <>
      {/* {console.log("sss", data)}
      {data.map((item: {email: string}) => {
        return <div>{item.email}</div>;
      })}
      <Name name={"kapil"}/> */}
      <Header />
      <Signup />
    </>
  );
}

export default App;
