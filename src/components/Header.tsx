import style from "./Header.module.css";

import logo from "../assets/ntn.png"

export function Header() {
    return (
        <header className={style.header}>
            <div>
            <img src={logo} alt="Logotipo do blog"/>
            <strong>Blog</strong>
            </div>
        </header>
    )
}