import React from "react";
import "./../App.css"

import { useHistory } from "react-router-dom";

function Dashboad() {
    const history = useHistory();
    return (
        <div className="App">
            <header className="App-header">
                <div className="container-d">
                    <div className="titule-crush">
                        <p> QUER NAMORAR COMIGO?:)<span>|</span></p>

                            <div className="dual-buttons">
                                <button className="button"  onClick={() => { history.push('/');}}>SIM</button>
                                <button className="button button2"  onClick={() => { history.push('/Default');}}>NÃO</button>
                            </div>
                    
                    </div>
                </div>
               
            </header>

        </div>
    );
}

export default Dashboad;