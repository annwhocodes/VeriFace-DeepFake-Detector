import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './results.css';

const Results = ({ fakePercentage, realPercentage, parameter1, parameter2, parameter3 }) => {
  const data = [
    { name: 'Real', value: realPercentage },
    { name: 'Fake', value: fakePercentage },
  ];

  const COLORS = ['#4CAF50', '#ef4444'];

  return (
    <div className="results-container">
      <div className="donut-chart">
        <h2>Video Analysis</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            innerRadius={80}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div className="parameters">
        <h2>Parameters</h2>
        <div className="parameter-item">
          <span className="parameter-label">Parameter 1:</span>
          <span className="parameter-value">{parameter1}</span>
        </div>
        <div className="parameter-item">
          <span className="parameter-label">Parameter 2:</span>
          <span className="parameter-value">{parameter2}</span>
        </div>
        <div className="parameter-item">
          <span className="parameter-label">Parameter 3:</span>
          <span className="parameter-value">{parameter3}</span>
        </div>
      </div>
    </div>
  );
};

export default Results;