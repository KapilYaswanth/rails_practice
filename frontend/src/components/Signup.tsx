import React, {useState} from "react";

function Signup(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        flexDirection:"column"
      }}
    >
      <h2>Signup form</h2>
      <form onSubmit={(e)=>{e.preventDefault()}} style={{display:"flex", flexDirection:"column", height:"200px", justifyContent:"space-between"}}>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Name" required/>
      <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" required/>
      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Passowrd" required/>
      <input type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} placeholder="Confirm Password" required/>
      <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
