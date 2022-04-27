import "./MenuRound.css";
import { useState } from "react";

interface MenuRoundProps {
  menu: string;
  close: string;
  menu1: string;
  menu2: string;
  menu3: string;
  menu4: string;
  menu5: string;
}

const MenuRound = (props: MenuRoundProps) => {
  const { menu1, menu2, menu3, menu4, menu5, close, menu } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div
      id="menuRoundButton"
      className={isOpen ? "menuRound" : "menuRound closedRound"}
      onClick={handleClick}
    >
      <div className="messagesRound buttonRound">
        {(isOpen && menu1) || "Home"}
      </div>
      <div className="musicRound buttonRound">
        {(isOpen && menu2) || "Info"}
      </div>
      <div className="homeRound buttonRound">
        {(isOpen && menu3) || "Product"}
      </div>
      <div className="placesRound buttonRound">
        {(isOpen && menu4) || "Service"}
      </div>
      <div className="bookmarkRound buttonRound">
        {(isOpen && menu5) || "Contact"}
      </div>
      <div id="textRoundMenu" className="mainRound buttonRound">
        {isOpen ? close || "Close" : menu || "Menu"}
      </div>
    </div>
  );
};
export default MenuRound;
