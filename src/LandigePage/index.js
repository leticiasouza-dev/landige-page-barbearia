import React from "react";
import Header from '../components/Header';
import './style.css'

function LandigePage(){
    return(
        <>
            <Header/>

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
        </>
    )
}

export default LandigePage;