import {createContext} from "react";
import {Link, Navigate} from "react-router-dom";
import {useState} from "react";




export default function LoginPage() {
  const [emaillog, setEmail] = useState('');
  const [passwordlog, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [loginStatus, setLoginStatus] = useState('');
 const [user,setUser] = useState('');
  
  const login = async () => {
    let _datos = {email: emaillog,
        password: passwordlog
    }
    console.log(_datos)
    try {
      // In the port of the server obviously
      const resultado = await fetch( 'http://localhost:3100/api/v1/login', {
        method: "POST",
        body: JSON.stringify({
            "email":emaillog,
            "password":passwordlog
            }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      } );
       console.log(resultado)
      const res = await resultado.json()
   
      console.log(res);
      console.log(res.status);
      if (res.status == 'success') {
        console.log('Logged succesfully!');
        setLoginStatus(
          `Logged succesfully! Welcome back ${res.data.user[0].nombre}`
          
        );
        setRedirect(true);
        console.log(res.data.user[0])
      
          let user2 = res.data.user[0]
        setUser(user2)
        console.log(user)
        localStorage.setItem ('user', JSON.stringify(user2))

        
      }
    } catch (err) {console.log(`⛔⛔⛔: ${err.response.data.message}`);
    setLoginStatus(err.response.data.message);
    }
  };

  const handlerLogin = ev => {
    ev.preventDefault();
    login();
  };


  if (redirect) {
    console.log(redirect)
    return <Navigate to={'/'} />
    
  }



  
  return (

      
        <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handlerLogin}>
          <input type="email"
                 placeholder="your@email.com"
                 value={emaillog}
                 onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
                 placeholder="password"
                 value={passwordlog}
                 onChange={ev => setPassword(ev.target.value)} />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
          </div>
        </form>
      </div>
    </div>
   
 );
}



 