import React, {useEffect, useState} from 'react';

import {Link, Navigate, json, useParams} from "react-router-dom";

import Tabla from '../Tabla/Tabla'
import AccountNav from "./NavAccount";


export default function ProfilePage() {
  const [redirect,setRedirect] = useState(null);
  let user = JSON.parse(localStorage.getItem('user'));
  let id = user.id
  console.log(id)

 const [moneda, setMoneda]= useState([])
  const [search, setSearch]= useState("")

  const URI = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=true';

 
 const fav = async () => {
  try {
    // In the port of the server obviously
    const resultado = await fetch( 'http://localhost:3100/api/v1/favorites', {
      method: "POST",
      body: JSON.stringify({
          "id":id
          }),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    } );
    
    const res = await resultado.json()
  const array = res.user
  console.log(array)
  return array   
    
  } catch (err) {console.log(`⛔⛔⛔: ${err.response.data.message}`);
  
  }
 }
const dato =fav().then(
  data=>{
   getMoneda(URI,data)
  }
)


  const getMoneda = (URI,array2)=>{ 

    
    fetch(URI)
    .then((response)=>response.json())
    .then( (data)=>{ 
      
      const filter = (data,query)=>{
        data.filter(data => {const values = data.name
         
        return query.query(q => values.includes(q.moneda)
        )})

      }
      const restulado= filter(data,array2);
      setMoneda(restulado)




   
  

      
    })
    .catch((err)=>{
    
    })

  }
  useEffect(() => {
    getMoneda(URI);
  }, []);

 
  
  let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  async function logout() {
    localStorage.clear()
    setRedirect('/');
    
  }

 

  if ( !user && !redirect) {
    return <Navigate to={'/login'} />
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div>
      <AccountNav />
      
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.nombre} ({user.correo})<br />
          <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
        </div>
      
        <div className='container'>
      
      <div className='row'>
        <div className='flex'>
        <input className="form-control mt-4 text-center"  type="text" placeholder="Search.." onChange={e => setSearch(e.target.value)}/>
        </div>
   
    <Tabla  moneda={moneda} filtro={search} />
    </div>
    
    
  
   
</div>
       
      
    </div>
  );
}