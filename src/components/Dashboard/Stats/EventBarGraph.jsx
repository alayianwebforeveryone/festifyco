"use client";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const EventBarGraph = ({graphData}) => {

  const yearCounts =  {}

  graphData.forEach(eventData=>{
    const year = new Date(eventData.date).getFullYear();
    // console.log("Year:", year);
    if(!yearCounts[year]){
      yearCounts[year] ={
        "year": year.toString(),
        "Purchased Event": 0,
      }
    }
    yearCounts[year]["Purchased Event"] += 1;
    // console.log("Year Counts:",  Object.values(yearCounts));
    return Object.values(yearCounts);
  })

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={500}
        height={300}
        data={Object.values(yearCounts)}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
       
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Purchased Event" fill="#9747FF" />
        <Bar dataKey="Registered Event" fill="#60B0F4" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default EventBarGraph;
