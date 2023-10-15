import React, {useEffect, useState} from 'react';
import './Contenido.css';
import { PiStarThin } from "react-icons/pi";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
 
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
       display:false
      },
      scales: [{
            xAxes: {display:false},
          }]
        },
  };


const contenido = ({moneda,index})=>{
    const labels =[]
    for(let i=0; i<168; i++){
        labels.push(i)
    }
   
    const data ={
        labels, 
        datasets: [
            {
              label: '',
              data: moneda.sparkline_in_7d.price,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }]
    }



     
    return(

        <tr key={moneda.name}>
             <th ><PiStarThin /></th>
            <th scope="row">{index + 1} </th>
            <td>
                <img src={moneda.image} alt="imagen" width='50px' height='50px'/>
                {moneda.name}
            </td>           
            <td>${moneda.current_price}</td>
            <td>${moneda.high_24h}</td>
            <td>${moneda.low_24h}</td>
            <td className={moneda.price_change_24h>0 ? "text-success" : "text-danger"}>${moneda.price_change_24h}</td>
            <td>${moneda.total_volume}</td>
            <td>${moneda.market_cap}</td>
            <td><Line options={options} data={data}/>
            </td>
        
        </tr>
    )


}

export default contenido;

