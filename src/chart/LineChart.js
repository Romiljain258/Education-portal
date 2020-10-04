import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    const data = {
        
        labels: ['mon', 'tues', 'wed', 'thus', 'fri', 'sat', 'sun'],
        datasets: [
            {
                label: 'learning hours',
                data: [2, 3, 4, 3, 4, 5.5, 4],
                backgroundColor: ['rgba(0, 0, 75, 0.1)'],
                borderColor: ['rgba(0,0,0,1)'],
                pointBackgroundColor: ['rgba(0,0,0,1)'],
                pointRadius: [4, 4, 4, 4, 4, 4, 4],
                pointHoverRadius: 6,
            },
        ]
    }

    const options = {
        title: {
            // display:true,
            // text:'text'
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 6,
                    stepSize: 1
                }
            }]
        }
    }
    return (
        <div className="statistics">
            <h4 className="statistics-text">Your Statistics</h4>
            <h6 className="statistics-text">Learning Hours</h6>
            <Line class="field" data={data} options={options} />
        </div>);
}
export default LineChart;