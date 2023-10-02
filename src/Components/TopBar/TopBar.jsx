import "./TopBar.css";


import Home from "../../Pages/Home/Home.jsx";
import TestPage from "../../Pages/TestPage/TestPage.jsx";
import { useEffect } from "react";

const MENU_ITEMS = [
    {
        page: <Home />,
        title: 'Home'
    },
    {
        page: <TestPage />,
        title: 'Test'
    }
];




const TopBar = (props) => {
    
    
    useEffect(() => {
        props.setActualFrame(<Home />)
    }, []);
    
    return(
        <menu className="top-menu-bar">
            {
                MENU_ITEMS.map((item)   => {
                    return(
                        <button className="top-menu-button" onClick={() => props.setActualFrame(item.page)}>{item.title}</button>
                    );
                })
            }
        </menu>
    );
}

export default TopBar;