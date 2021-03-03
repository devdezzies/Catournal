import React from 'react';
import 'primereact/resources/primereact.css';
import { Chart } from 'primereact/chart';

const DoughnutChartDemo = () => {
    const chartData = {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    };

    const lightOptions = {
        legend: {
            labels: {
                fontColor: '#495057'
            }
        }
    };

    return (
        <div className="card">
            <Chart type="doughnut" data={chartData} options={lightOptions} />
        </div>
    )
}

export default DoughnutChartDemo