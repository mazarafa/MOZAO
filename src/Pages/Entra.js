import React from "react";
import { useHistory } from "react-router-dom";



function Entra() {
    const history = useHistory();
    return (
        <div className="App">
            <header className="App-header">
               
                <div className="text-entre">
                    Pressione a tecla ENTRE
                </div>

                <div className="heart_beating">

                    <div className="heart">
                        <span className="glow"></span>
                    </div>
                    <span className="shadow-header"></span>
                </div>

                <div className="clique-entre">

                    <button className="button"
                        onClick={() => {
                            history.push('/Congratulations');
                        }}
                    >ENTRE</button>
                </div>
            </header>


        </div>
    );
}

export default Entra;