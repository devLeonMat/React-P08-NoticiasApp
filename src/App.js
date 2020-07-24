import React, {Fragment, useState, useEffect} from 'react';

import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {

    // definimos categoria
    const [categoria, guardarCategoria] = useState('');

    const [noticias, guardarNoticias] = useState([]);

    //
    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=b9fd64860b67430584777ab454423bf4`

            const response = await fetch(url);
            const news = await response.json();
            guardarNoticias(news.articles);
        };

        consultarApi();
    }, [categoria]);


    return (
        <Fragment>
            <Header title="Buscador de Noticias"/>

            <div className="container white">
                <Formulario
                    guardarCategoria={guardarCategoria}
                />
                <ListadoNoticias noticias={noticias}/>
            </div>

        </Fragment>


    );
}

export default App;
