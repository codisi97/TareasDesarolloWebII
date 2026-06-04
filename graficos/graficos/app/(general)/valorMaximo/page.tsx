
'use client';
import { getValorMaximo } from '@/app/servicios/api'
import React, { useState,useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);


export default function page(){

   const [chartData,setChartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: 'Salario Maximo',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ]
  })


  useEffect(() => {
    getValorMaximo(50)
    .then((data) => {

       const labels = data.map((item: any) => item.status);
       const cantidad = data.map((item: any) => item.Cantidad);


      setChartData({
        labels: ['Estado','Cantidad'],


        datasets: [
          {
            label:'Estado',
            data: cantidad,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }
        ]
      })
    })
  }, [])



  return (
    <div>
      <Line data={chartData} />
    </div>
  )
}