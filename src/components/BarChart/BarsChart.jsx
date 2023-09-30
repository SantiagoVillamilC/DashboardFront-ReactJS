import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var totalEnviados = [4070, 4158, 4124, 3006, 8000];
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

var misoptions = {
    responsive : true,
    // animation : false,
    plugins : {
        legend : {
            display : false
        }
    },
    scales : {
        y : {
            min : 0,
            max : 5000
        },
        x: {
            ticks: { color: 'white'}
        }
    }
};

var midata = {
    labels: dias,
    datasets: [
        {
            label: 'Total enviados',
            data: totalEnviados,
            backgroundColor: 'rgba(153, 102, 255, 0.7)',
        }
    ]
};

export default function BarsChart() {
    return <Bar data={midata} options={misoptions} />
}