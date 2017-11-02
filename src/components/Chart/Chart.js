import React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis} from 'recharts';

class Chart extends React.Component {
    render() {

        const data = [
            {name: '', uv: 16, pv: 2400, amt: 2400},
            {name: 'Day 2', uv: 15, pv: 1398, amt: 2210},
            {name: 'Day 3', uv: 5, pv: 9800, amt: 2290},
            {name: 'Day 4', uv: 7, pv: 2400, amt: 2400},
            {name: 'Day 5', uv: 7, pv: 1398, amt: 2210},
            {name: 'Day 6', uv: 11, pv: 9800, amt: 2290},
            {name: 'Day 7', uv: 12, pv: 2400, amt: 2400},
            {name: 'Day 8', uv: 10, pv: 1398, amt: 2210},
            {name: 'Day 9', uv: 5, pv: 9800, amt: 2290},
            {name: 'Day 10', uv: 8, pv: 2400, amt: 2400},
            {name: 'Day 11', uv: 6, pv: 1398, amt: 2210},
            {name: 'Day 12', uv: 9, pv: 9800, amt: 2290},
            {name: 'Day 13', uv: 3, pv: 2400, amt: 2400},
            {name: 'Day 14', uv: 3, pv: 1398, amt: 2210},
            {name: 'Day 15', uv: 6, pv: 9800, amt: 2290},
            {name: 'Day 16', uv: 3, pv: 2400, amt: 2400},
            {name: 'Day 17', uv: 1, pv: 1398, amt: 2210},
            {name: 'Day 18', uv: 0, pv: 9800, amt: 2290},
      ];

        return(
            <div>
                <div className='chartStyle'>
                    <LineChart className='chart' width={1300} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(2, 2, 2, 0.338)"/>
                        <Line type="solid" dataKey="uv" stroke="rgba(248, 171, 103, 0.979)" />
                        <XAxis stroke="rgba(2, 2, 2, 0.338)" dataKey="name" />
                        <YAxis stroke="rgba(2, 2, 2, 0.338)" />
                    </LineChart>
                </div>
            </div>
        )
    }
}

export default Chart;