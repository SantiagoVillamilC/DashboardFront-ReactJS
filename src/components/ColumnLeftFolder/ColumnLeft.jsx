import Style from "./ColumnLeftStyle.module.css";
import Image from "../../assets/usuario.png";
import Home from "../../assets/casa.png";
import userOp from "../../assets/usuarioOption.png";
import calendar from "../../assets/calendario.png";
import faqIma from "../../assets/pregunta.png";
import esta from "../../assets/estadisticas.png";
import circu from "../../assets/grafico-circular.png";
import linea from "../../assets/grafico-de-lineas.png";
import tableIma from "../../assets/celulas.png";

function ColumnLeft() {

  return (
    <div className={Style.principalColumn}>
      <div className={Style.bienvenida}><p>Welcome!</p></div>
      <div className={Style.userInfo}>
        <img src={Image} alt="userImage" />
        <p>Santiago</p>
        <p>Web Design</p>
      </div>
      <hr />
      <div className={Style.listMenuPrincipal}>
        <ul>
          <li>
            <div className={Style.dispositionList}>
              <img src={Home} alt="" />
              <p>Home</p>
            </div>
          </li>
        </ul>
        <div className={Style.listPart}>
          <ul>
            <li>Pages</li> 
          </ul>
          <div className={Style.elementList}>
            <ul>
              <li>
                <div className={Style.dispositionList}>
                <img src={userOp} alt="" />
                <p>Profile</p>
                </div>
              </li>
              <li>
                <div className={Style.dispositionList}>
                <img src={calendar} alt="" />
                <p>Calendar</p>
                </div>
              </li>
              <li>
                <div className={Style.dispositionList}>
                <img src={faqIma} alt="" />
                <p>FAQ</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={Style.listPart}>
          <ul>
            <li>Charts</li> 
          </ul>
          <div className={Style.elementList}>
            <ul>
              <li>
              <div className={Style.dispositionList}>
                <img src={esta} alt="" />
                <p>Bar Chart</p>
                </div>
              </li>
              <li>
              <div className={Style.dispositionList}>
                <img src={circu} alt="" />
                <p>Pie Chart</p>
                </div>
              </li>
              <li>
              <div className={Style.dispositionList}>
                <img src={linea} alt="" />
                <p>Line Chart</p>
                </div>
              </li>
              <li>
              <div className={Style.dispositionList}>
                <img src={tableIma} alt="" />
                <p>History table</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p id="HoraActual"> </p>
    </div>
  );
}

export default ColumnLeft;
