import Style from "./History.module.css";

function History() {
    return (
        <div className={Style.container}>
            <p>Historico de enviados mensual</p>
            <table>
                <tr>
                    <td className={Style.containerPurple}>MES</td>
                    <td className={Style.containerBlue}>ENVIADOS</td>
                    <td className={Style.containerRed}>CON ERROR</td>
                </tr>
                <tr>
                    <td className={Style.containerPurple}>Junio</td>
                    <td className={Style.containerBlue}>42.523</td>
                    <td className={Style.containerRed}>75</td>
                </tr>
                <tr>
                    <td className={Style.containerPurple}>Julio</td>
                    <td className={Style.containerBlue}>52.456</td>
                    <td className={Style.containerRed}>48</td>
                </tr>
                <tr>
                    <td className={Style.containerPurple}>Agosto</td>
                    <td className={Style.containerBlue}>54.127</td>
                    <td className={Style.containerRed}>32</td>
                </tr>
                <tr>
                    <td className={Style.containerPurple}>Septiembre</td>
                    <td className={Style.containerBlue}>65.521</td>
                    <td className={Style.containerRed}>12</td>
                </tr>
                {/* <tr>
                    <td className={Style.containerPurple}>Viernes</td>
                    <td className={Style.containerBlue}>5674</td>
                    <td className={Style.containerRed}>12</td>
                </tr> */}
            </table>
        </div>
    )
}

export default History;