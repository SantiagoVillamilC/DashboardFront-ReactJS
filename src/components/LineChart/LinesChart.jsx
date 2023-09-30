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

var enviados = [350, 679, 925, 1269, 1658, 2087, 2468, 3132, 3510, 4124];
var meses = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

var midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Enviados',
            data: enviados,
            tension: 0.2,
            fill: true,
            borderColor: 'rgb(0, 220, 195)',
            backgroundColor: 'rgba(0, 220, 195, 0.2)',
            pointRadius: 4,
            // pointBorderColor: 'rgba(255, 99, 132)',
            // pointBackgroundColor: 'rgba(255, 99, 132)',
        },
    ],
};

var misoptions = {
    plugins : {
        legend : {
            display : false
        }
    },
    scales: {
        scaleOverride: true,
        y: {
            min: 0,
            max: 5000,
            ticks: {
              stepSize: 500,
            },
          },
        x: {
            ticks: { color: 'white' }
        }
    }
};

export default function LinesChart() {
    return <Line data={midata} options={misoptions} />
}