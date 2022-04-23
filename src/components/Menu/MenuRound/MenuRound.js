import './MenuRound.css'
import { useState } from 'react';



const MenuRound = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    return (
        <div id='menuRoundButton' class={isOpen ? 'menuRound': "menuRound closedRound"}onClick={handleClick}>
            <div class='messagesRound buttonRound'>{isOpen && "Home"}</div>
            <div class='musicRound buttonRound'>{isOpen && "Info"}</div>
            <div class='homeRound buttonRound'>{isOpen && "Product"}</div>
            <div class='placesRound buttonRound'>{isOpen && "Service"}</div>
            <div class='bookmarkRound buttonRound'>{isOpen && "Contact"}</div>
            <div id="textRoundMenu" class='mainRound buttonRound'>{isOpen ? "Close" : "Menu"}</div>
        </div>

    )
}
export default MenuRound;