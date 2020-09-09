import React from 'react';
import "./style.scss";
import MainInfo from "../MainInfo";
import Skills from "../Skills";


const Info = ({ isRussian }) => {
  return (
    <>
      <section className="info">
        <MainInfo isRussian={isRussian} />
        <Skills isRussian={isRussian} />
      </section>
    </>

  );
};

export default Info;