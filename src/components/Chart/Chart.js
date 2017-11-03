import React from 'react';
import {LineChart, Line, Tooltip, Legend} from 'recharts';

class Chart extends React.Component {
    render() {

        const data = [
            {name: 'Day 1', Progress: 16},
            {name: 'Day 2', Progress: 15},
            {name: 'Day 3', Progress: 5},
            {name: 'Day 4', Progress: 7},
            {name: 'Day 5', Progress: 7},
            {name: 'Day 6', Progress: 11},
            {name: 'Day 7', Progress: 12},
            {name: 'Day 8', Progress: 10},
            {name: 'Day 9', Progress: 5},
      ];

        return(
            <div>
                <div className='chartStyle'>
                    <LineChart width={1300} height={300} data={data}>
                        <Line dataKey="Progress" stroke="rgba(248, 171, 103, 0.979)" />
                        <Tooltip/>
                        <Legend verticalAlign="top" height={36} iconType='circle' />
                        {/* <CartesianGrid strokeDasharray="3 3" stroke="rgba(2, 2, 2, 0.338)"/> */}
                        {/* <XAxis stroke="rgba(2, 2, 2, 0.338)" dataKey="name" /> */}
                        {/* {<YAxis stroke="rgba(2, 2, 2, 0.338)" />} */}
                    </LineChart>
                    
                </div>
                
            </div>
        )
    }
}

export default Chart;