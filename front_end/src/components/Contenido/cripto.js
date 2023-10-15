import React from 'react';

import Tabla from '../Tabla/Tabla';

export default function favorites(){

    let user = JSON.parse(localStorage.getItem('user'));
    let id = user.id

    const [moneda, setMoneda]= useState([])
    const [search, setSearch]= useState("")
  
    const URI = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=true';
  
    const getMoneda = (URI)=>{
      fetch(URI)
      .then((response)=>response.json())
      .then( (data)=>{
  setMoneda(data)  
    
       
      })
      .catch((err)=>{
      
      })
  
    }
    useEffect(() => {
      getMoneda(URI);
    }, []);
  
   

    return(
        <div className='container'>
          
              <div className='row'>
                <div className='flex'>
                <input className="form-control mt-4 text-center"  type="text" placeholder="Search.." onChange={e => setSearch(e.target.value)}/>
                </div>
           
            <Tabla  moneda={moneda} filtro={search} />
            </div>
            
            
          
           
        </div>
      )


}