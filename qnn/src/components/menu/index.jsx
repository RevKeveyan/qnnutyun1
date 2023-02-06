import { useState } from "react";
import {NavLink} from "react-router-dom";


import './style.scss'
export const Menu = () =>{
const [menu] = useState(['home', 'form', 'profile'])

    return (
        <ul className="menu">
                {menu.map((elem, i)=>{
                    return <li key={i}><NavLink to={'/'+elem}>{elem}</NavLink></li>
                })}
        </ul>
    );
}