"use client";

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
   
    if(!yearCounts[year]){
      yearCounts[year] ={
        "year": year.toString(),
        "Purchased Event": 0,
      }
    }
    yearCounts[year]["Purchased Event"] += 1;

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
       
      </BarChart>
    </ResponsiveContainer>
  );
};
export default EventBarGraph;
