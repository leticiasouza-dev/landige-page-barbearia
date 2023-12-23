import React, {useState} from "react";
import './style.css'

function LandigePage(){

    const [darkMode, setDarkMode] = useState('modo-claro'); 
    const [textonovo, settextoNovo] = useState('Dark'); 
    const [novaImg, setNovaImg] = useState('/assets/moon.png'); 

    const  darkModes = () => {
        verificaBackground();
    }

    const verificaBackground = () =>{
        if(darkMode === 'modo-claro'){
            setDarkMode('modo-escuro'); // muda a cor de fundo de acordo a classe css
            settextoNovo('Light'); // muda o texto
            setNovaImg('/assets/sun.png') // muda a imagem do meu botão
        } else{
            setDarkMode('modo-claro')
            settextoNovo('Dark');
            setNovaImg('/assets/moon.png')
        } 
    }

    return(
        <body className={darkMode}>
            <header>
                <img src='/assets/barbearia-logo.png' alt="" className="logo"/>

                <button onClick={darkModes}>
                    <img src={novaImg} alt=''/>
                    <p>{textonovo}</p>
                </button>
            
            </header>

            <main>
                <section className="sessaoBanner"></section>

                <section className="sessaoConteudo">
                    <div>
                        <h1>Bem-vindo a Barber Shop</h1>

                        <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>

                        <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>

                        <p className="paragrafo-diferente">S. Kelly</p>
                    </div>
                   
                </section>
            </main>
        </body>
    )
}

export default LandigePage;