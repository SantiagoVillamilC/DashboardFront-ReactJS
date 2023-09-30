import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var meses = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

var midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'En cola',
            data: [13, 6, 10, 25, 15, 25, 4, 14, 32, 14, 2, 26],
            borderColor: 'rgba(25, 99, 132, 1)',
            tension: 0.2,
        },
        {
            label: 'Procesando',
            data: [7, 5, 5, 7, 5, 9, 0, 5, 6, 2, 1, 5],
            borderColor: 'rgb(255, 206, 86)',
            tension: 0.2,
        },
        {
            label: 'Con error',
            data: [2, 5, 0, 6, 5, 0, 0, 2, 1, 6, 1, 7],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.2,
        },
    ],
};

var misoptions = {
    scales: {
        scaleOverride: true,
        y: {
            min: 0,
            max: 50,
            ticks: {
              stepSize: 10,
            },
          },
        x: {
            ticks: { color: 'white' }
        }
    }
};

export default function LinesChartSmall() {
    return <Line data={midata} options={misoptions} />
}