"use client"
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '2025',
    "Purchased Event": 24,
    "Registered Event": 39,
  
  },
  {
    name: '2026',
    "Purchased Event": 24,
    "Registered Event": 39,
   
  },
  {
    name: '2027',
    "Purchased Event": 24,
    "Registered Event": 39,
    
  },
  {
    name: '2028',
    "Purchased Event": 24,
    "Registered Event": 39,
   
   
  },
  {
    name: '2029',
    "Purchased Event": 24,
    "Registered Event": 39,
   
  },
  {
    name: '2030',
    "Purchased Event": 24,
    "Registered Event": 39,
   
  },
  
];

const  EventBarGraph =()=> {

    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Purchased Event" fill="#9747FF" />
          <Bar dataKey="Registered Event" fill="#60B0F4" />
        </BarChart>
      </ResponsiveContainer>
    );
  
}
export default EventBarGraph