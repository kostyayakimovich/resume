import React from 'react';
import {
  dataSkills,
  enTextAboutMe,
  ruTextAboutMe,
  myProjects
} from './DataSkills';
import phone from '../../assets/images/phone.png';
import telegram from '../../assets/images/telegram.png';
import gmail from '../../assets/images/gmail.png';
import skype from '../../assets/images/skype.png';
import "./style.scss";


const Skills = ({ isRussian }) => {
  const ruHeaderSkills = "Ключевые навыки";
  const enHeaderSkills = "Key skills";
  const ruAboutMe = "Обо мне";
  const enAboutMe = "About me";
  const ruHeaderProjects = "Мои проекты";
  const enHeaderProjects = "My projects";
  const ruContacts = "Контакты";
  const enContacts = "Contacts";

  return (
    <>
      <article className="skills">
        <div className="key_skills">
          <h2 className="skills_headline">
            {isRussian ? ruHeaderSkills : enHeaderSkills}
          </h2>
          <ul className="list_key_skills">
            {dataSkills.map(item =>
              <li className="key_skills_item" key={item.value}>
                <img className="skills_icon" alt={item.value} src={item.img} />
                <p className="skills_text">{item.value}</p>
              </li>)}
          </ul>
        </div>

        <div className="about_me">
          <h2 className="skills_headline">
            {isRussian ? ruAboutMe : enAboutMe}
          </h2>
          <p className="text_about">
            {isRussian ? ruTextAboutMe : enTextAboutMe}
          </p>
        </div>

        <div className="my_projects">
          <h2 className="skills_headline">
            {isRussian ? ruHeaderProjects : enHeaderProjects}
          </h2>
          <ul className="list_projects">
            {myProjects.map(item =>
              <li className="projects_item" key={item.name}>
                <a href={item.link ? item.link : null}
                  target="_blank" rel="noopener noreferrer"
                  title={!item.link ?
                    "временно не работает из-за изменения условий freeYandex Api"
                    : null}>
                  {item.name}</a>
                <a href={item.github}
                  target="_blank"
                  rel="noopener noreferrer">Github</a>
              </li>)}
          </ul>
        </div>

        <div className="contacts">
          <h2 className="skills_headline">
            {isRussian ? ruContacts : enContacts}
          </h2>
          <div className="contacts_block">
            <div className="contacts_item">
              <img className="contacts_icon"
                alt="contactsPhone"
                src={phone} />
              <p className="contacts_item_text">+375 29 147-33-29</p>
            </div>
          </div>

          <div className="contacts_block">
            <div className="contacts_item">
              <img className="contacts_icon"
                alt="contactsTelegram"
                src={telegram} />
              <p className="contacts_item_text">Kostya Yakimovich</p>
            </div>
          </div>

          <div className="contacts_block">
            <div className="contacts_item">
              <img className="contacts_icon"
                alt="contactsGmail"
                src={gmail} />
              <p className="contacts_item_text">
                yakimovichkostya@gmail.com</p>
            </div>
          </div>

          <div className="contacts_block">
            <div className="contacts_item">
              <img className="contacts_icon"
                alt="contactsSkype"
                src={skype} />
              <p className="contacts_item_text">Yakimovich Kostya</p>
            </div>
          </div>

        </div>

      </article>
    </>

  );
};

export default Skills;