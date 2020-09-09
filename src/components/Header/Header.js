import React, { useCallback } from 'react';
import "./style.scss";


const Header = ({ isRussian, setIsRussian }) => {
  const ruName = "Якимович Константин";
  const enName = "Yakimovich Konstantsin";
  const ru = "русский";
  const en = "english";

  const handleChangeLang = useCallback(() => {
    isRussian ? setIsRussian(false) : setIsRussian(true)
  }, [isRussian, setIsRussian]);


  return (

    <>
      <header className="header">
        <div className="name"> <h1 className="name_text">
          {isRussian ? ruName : enName}</h1>
        </div>
        <p className="lang" onClick={handleChangeLang}>
          {isRussian ? en : ru}
        </p>
      </header>
    </>

  );
};

export default Header;