import React from 'react';
import Contenido from '../Contenido/Contenido';

const tabla = ({moneda,filtro})=>{
   const monedasFiltradas =  moneda.filter(
    (coin)=>
    coin.name.toLowerCase().includes(filtro.toLowerCase())| 
    coin.symbol.toLowerCase().includes(filtro.toLowerCase())
   );

    return(
        <table className='table table table-striped'>
            <thead className='thead-dark table-dark'>
                <tr>
                <th scope="col" key={0}></th>
                <th scope="col" key={1}>#</th>
                <th scope="col"  key={2}>Coin</th>
                <th scope="col" key={3}>Price</th>
                <th  scope="col" key={4}>High Price</th>
                <th  scope="col" key={5}>Low Price</th>
                <th scope="col" key={6}>24h</th>
                <th scope="col" key={7}>Volumen</th>
                <th scope="col" key={8}>Mkt Cap</th>
                <th scope="col" key={9}>Last 7 Days</th>

                </tr>
            </thead>

            <tbody>
            {monedasFiltradas.map((moneda,index) => {
                    return (
                        <Contenido moneda={moneda}  key={index} index={index}/>
                    )
                })}
               {/*   {(()=>{
                   const rows =[];
                   moneda.forEach((moneda,index) => {
                    rows.push(<Contenido moneda={moneda}  key={index} index={index}/>)
                    
                   }); 
                   return rows
                })()

                } */}

            </tbody>


        </table>



    )


}

export default tabla;