import React, { PureComponent } from 'react'
import {
    BarChart,
    Bar,
    Cell, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
    } from 'recharts';
import data from '../data';

const BarChartComp = () => {
    return (
      <ResponsiveContainer max-width="75%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            left : -10,
            right: 30
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#6520a4" barSize={90}/>
        </BarChart>
      </ResponsiveContainer>
    );
}

export default BarChartComp;
