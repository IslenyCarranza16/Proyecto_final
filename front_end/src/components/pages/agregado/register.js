import React from "react";
import {Link, Navigate} from "react-router-dom";
import {useState} from "react";






export default function RegisterPage() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
  
  
    const register = async () => {
        try {
          // In the port of the server obviously
          const resultado = await fetch( 'http://localhost:3100/api/v1/singup', {
        method: "POST",
        body: JSON.stringify({
            "username": name,
            "email":email,
            "password":password
            }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      } );
       console.log(resultado)
      const res = await resultado.json()
          console.log(res);
          if (res.status === 'success') console.log('Register succesfully');
        } catch (err) {
          console.log(`⛔⛔⛔: ${err.response.data.message}`);
        }
      };
      const handlerRegister = e => {
        e.preventDefault();
        register();
        // setUsernameReg('');
        // setPasswordReg('');
      };
    

  
  return (
    <div className="mt-4 grow flex items-center justify-around">
    <div className="mb-64">
      <h1 className="text-4xl text-center mb-4">Register</h1>
      <form className="max-w-md mx-auto" onSubmit={handlerRegister}>
        <input type="text"
               placeholder="John Doe"
               value={name}
               onChange={ev => setName(ev.target.value)} />
        <input type="email"
               placeholder="your@email.com"
               value={email}
               onChange={ev => setEmail(ev.target.value)} />
        <input type="password"
               placeholder="password"
               value={password}
               onChange={ev => setPassword(ev.target.value)} />
        <button className="primary">Register</button>
        <div className="text-center py-2 text-gray-500">
          Already a member? <Link className="underline text-black" to={'/login'}>Login</Link>
        </div>
      </form>
    </div>
  </div>
    
  );
}

