import React from 'react';
import myPhoto from '../../assets/images/myPhoto.jpg'
import { dataInfo } from './DataInfo';
import "./style.scss";


const MainInfo = ({ isRussian }) => {
  return (
    <>
      <article
        className="main_info">
        <div className="polaroid">
          <p>Kostya, Feb '06</p>
          <img src={myPhoto} alt="my_photo" />
        </div>

        <ul className="list_info">
          {isRussian ?
            dataInfo.map(item =>
              <li className="list_info_item" key={item.ruValue}>
                <h3 className="item_value">{item.ruValue}</h3>
                <p className="item_param"> {item.ruParam}</p>
              </li>) :
            dataInfo.map(item =>
              <li className="list_info_item" key={item.enValue}>
                <h3 className="item_value">{item.enValue}</h3>
                <p className="item_param"> {item.enParam}</p>
              </li>
            )}
        </ul>
      </article>
    </>

  );
};

export default MainInfo;