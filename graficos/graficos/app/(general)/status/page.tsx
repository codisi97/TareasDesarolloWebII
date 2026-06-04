'use client'
import React from 'react';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { getStatus} from '@/app/servicios/api'
import { Line } from 'react-chartjs-2'

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
          label: 'Estado',
          data: [],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }
      ]
    })

    useEffect(() => {
        getStatus()
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