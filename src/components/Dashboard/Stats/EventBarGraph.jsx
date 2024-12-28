"use client"
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Primaryschool: 24,
    SecondaySchool: 39,
    SchoolStaff: 30, // No spaces in the key
    amt: 100,
  },
  {
    name: 'Tue',
    Primaryschool: 24,
    SecondaySchool: 39,
    SchoolStaff: 30,
    amt: 100,
  },
  {
    name: 'Wed',
    Primaryschool: 24,
    SecondaySchool: 39,
    SchoolStaff: 30,
    amt: 100,
  },
  {
    name: 'Thur',
    Primaryschool: 24,
    SecondaySchool: 39,
    SchoolStaff: 30,
    amt: 100,
  },
  {
    name: 'Fri',
    Primaryschool: 24,
    SecondaySchool: 39,
    SchoolStaff: 30,
    amt: 100,
  },
  {
    name: 'Mon',
    Primaryschool: 24,
    SecondaySchool: 39,
    SchoolStaff: 30, // No spaces in the key
    amt: 100,
  },
  {
    name: 'Tue',
    Primaryschool: 24,
    SecondaySchool: 39,
    SchoolStaff: 30,
    amt: 100,
  },
  {
    name: 'Wed',
    Primaryschool: 24,
    SecondaySchool: 39,
    SchoolStaff: 30,
    amt: 100,
  },
  {
    name: 'Thur',
    Primaryschool: 24,
    SecondaySchool: 39,
    SchoolStaff: 30,
    amt: 100,
  },
  {
    name: 'Fri',
    Primaryschool: 24,
    SecondaySchool: 39,
    SchoolStaff: 30,
    amt: 100,
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
          <Bar dataKey="Primaryschool" fill="#00B074" />
          <Bar dataKey="SecondaySchool" fill="#BA98F5" />
          <Bar dataKey="SchoolStaff" fill="#6948A3" /> {/* Fixed the dataKey */}
        </BarChart>
      </ResponsiveContainer>
    );
  
}
export default EventBarGraph