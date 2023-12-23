import React from "react";
import './style.css'

function Header(){
    return (
        <header>
            <img src="/assets/barbearia-logo.png" alt="" className="logo"/>

            <button>
                <img src='/assets/moon.png' alt=''/>
                <p>Dark</p>
            </button>
            
        </header>
    )
}

export default Header