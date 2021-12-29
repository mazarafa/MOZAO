import React from "react";
import { useHistory } from "react-router-dom";

function Congratulations() {
    const history = useHistory();

    return (
        <div className="App">
            <header className="App-header">
                <div className="web-pedido">
                    Algumas pessoas entram nas nossas vidas de surpresa. 
                    Você entrou na minha num momento em que eu não estava esperando nada.
                    Mas depois de ter entrado, me fez pensar em como aguentei viver  tanto tempo sem você. <br/>
                    
                </div>
                <button className="button"  onClick={() => { history.push('/Dashboad');}}>PROXIMO</button>

                

            </header>
        </div>
    );
}



export default Congratulations;