'use client'
import React from 'react';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { getPlannerCode} from '@/app/servicios/api'
import {Bar} from 'react-chartjs-2'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default function page(){
   const [chartData,setChartData] = useState({
        labels: [] as string[],
        datasets: [
          {
            label: 'Producto mas costoso por categoria',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }
        ]
      })
      useEffect(() => {
              getPlannerCode()
              .then((data) => {
          
                 const labels = data.map((item: any) => item.plannerCode);
                 const cantidad = data.map((item: any) => item.ProductoMasCostoso);
          
          
                setChartData({
                  labels: ['Categoria','Precio'],
          
          
                  datasets: [
                    {
                      label:'Categoria',
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
    <div><Bar data={chartData} /></div>
  )
}