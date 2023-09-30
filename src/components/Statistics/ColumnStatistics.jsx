import Style from "./ColumnStatistics.module.css";
import Letter from "../../assets/hecho.png";
import LetterLoad from "../../assets/rendimiento.png";
import LetterProcess from "../../assets/sincronizacion.png";
import LetterFailed from "../../assets/rechazado.png";

function ColumnStatistics(){
    return(
        <div className={Style.principalContainer}>
            <div className={Style.enviadosContainer}>
                <div className={Style.infoContainer}>
                    <div className={Style.imageInfoContainer}>
                        <img src={Letter} alt="SentImage" />
                        <p>Enviados:</p>
                    </div>
                    <div className={Style.numberContainer}>
                        <p>4124</p>
                    </div>
                </div>
            </div>
            <div className={Style.colaContainer}>
                <div className={Style.infoContainer}>
                    <div className={Style.imageInfoContainer}>
                        <img src={LetterLoad} alt="SentImage" />
                        <p>En cola:</p>
                    </div>
                    <div className={Style.numberContainer}>
                        <p>99</p>
                    </div>
                </div>
            </div>
            <div className={Style.procesandoContainer}>
                <div className={Style.infoContainer}>
                    <div className={Style.imageInfoContainer}>
                        <img src={LetterProcess} alt="SentImage" />
                        <p>Procesando:</p>
                    </div>
                    <div className={Style.numberContainer}>
                        <p>15</p>
                    </div>
                </div>
            </div>
            <div className={Style.errorContainer}>
                <div className={Style.infoContainer}>
                    <div className={Style.imageInfoContainer}>
                        <img src={LetterFailed} alt="SentImage" />
                        <p>Con error:</p>
                    </div>
                    <div className={Style.numberContainer}>
                        <p>19</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColumnStatistics;