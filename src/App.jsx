import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LinesChart from "./components/LineChart/LinesChart";
import ColumnLeft from "./components/ColumnLeftFolder/ColumnLeft.jsx";
import ColumnStatistics from "./components/Statistics/ColumnStatistics";
import PiesChart from "./components/PieChart/PiesChart";
import BarsChart from "./components/BarChart/BarsChart";
import History from "./components/HistoryComponent/History";
import LinesChartSmall from "./components/LineChartSmall/LineChartSmall";

function App() {

  return (
    <>
      <ColumnLeft />
      {/* <h1>Correos</h1> */}
      {/* <p>Bienvenid@ al tablero de correos</p> */}
      <div className="containerStatistics">
        <ColumnStatistics />
      </div>
      <div className="containerCharts">
        <div className="containerLinesChart">
          <LinesChart />
        </div>
        <div className="containerPiesChart">
          <PiesChart />
        </div>
        <div className="containerBarsChart">
          <BarsChart />
        </div>
      </div>
      <div className="containerHistory">
        <div className="containerSmallChart">
          <p>Estadisticas de hoy:</p>
          <div className="containerJustChart">
            <LinesChartSmall/>
          </div>
        </div>
        <div className="containerSectionHistory">
          <History/>  
        </div>
      </div>
    </>
  );
}

export default App;
