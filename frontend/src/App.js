import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    window.fetch('http://127.0.0.1:3000/users').then(res => {
      console.log('hello',res)
      return res.json()}).then(resjson => { console.log('hii',resjson) 
      setData(resjson.data)})
  },[])
  
  return (
    <>
    {console.log('sss', data)}
    {data.map((item) => {
      return <div>{item.email}</div>
    })}
    </>
  );
}

export default App;
