import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { ONE, Tab } from '../../const';
import Credits from '../credits/credits';
import Deposits from '../deposits/deposits';
import Insurance from '../insurance/insurance';
import Service from '../service/service';

function Information() {
  const [activeTab, setActiveTab] = useState('deposits');

  const tabs = [Tab.DEPOSITS, Tab.CREDITS, Tab.INSURANCE, Tab.SERVISES];

  function tabClick(evt, tab) {
    switch(tab ? tab : evt.target.name) {
      case Tab.CREDITS: 
        setActiveTab(Tab.CREDITS);
        break;
      case Tab.INSURANCE: 
        setActiveTab(Tab.INSURANCE);
        break;
      case Tab.SERVISES: 
        setActiveTab(Tab.SERVISES);
        break;
      default: 
        setActiveTab(Tab.DEPOSITS)
        break;
    }
  }

  const renderDeposits = () => (
    <Deposits/>
  );

  const renderCredits = () => (
    <Credits/>
  );

  const renderInsurance = () => (
    <Insurance/>
  );

  const renderServises = () => (
    <Service/>
  );

  const renderTab = (hooks) => {
    switch(hooks) {
      case Tab.CREDITS:
        return renderCredits();
      case Tab.INSURANCE:
        return renderInsurance();
      case Tab.SERVISES:
        return renderServises();
      default:
        return renderDeposits();
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if(activeTab === Tab.SERVISES) {
        return;
      }
      setActiveTab(tabs[tabs.indexOf(activeTab) + ONE]);
    },
    onSwipedRight: () => {
      if(activeTab === Tab.DEPOSITS) {
        return;
      }
      setActiveTab(tabs[tabs.indexOf(activeTab) - ONE]);
    }
  });

  return(
    <>
    <section className="information" {...handlers}>
      <div className="information__tabs">
        <ul className="information__tabs-list">
        <li className={`information__tabs-item ${activeTab === Tab.DEPOSITS && 'information__tabs-item--active'}`}
            id={Tab.DEPOSITS}
            onClick={(evt) => {
              setActiveTab(evt.target.id ? evt.target.id : evt.target.name);
            }}>
              <Link className="information__tabs-text"
              tabIndex="1"
              to='#'
              onFocus={tabClick}
              name={Tab.DEPOSITS}
              >
                Вклады
              </Link>
          </li>
          <li className={`information__tabs-item ${activeTab === Tab.CREDITS && 'information__tabs-item--active'}`}
            id={Tab.CREDITS}
            onClick={(evt) => {
              setActiveTab(evt.target.id ? evt.target.id : evt.target.name)
            }}
            >
              <Link className="information__tabs-text"
              tabIndex="2"
              to='#'
              onFocus={tabClick}
              name={Tab.CREDITS}
              >
                Кредиты
              </Link>
          </li>
          <li className={`information__tabs-item ${activeTab === Tab.INSURANCE && 'information__tabs-item--active'}`}
              id={Tab.INSURANCE}
              onClick={(evt) => {
              setActiveTab(evt.target.id ? evt.target.id : evt.target.name)
              }}
            >
              <Link className="information__tabs-text"
              tabIndex="2"
              to='#'
              onFocus={tabClick}
              name={Tab.INSURANCE}
              >
                Страхование
              </Link>
          </li>
          <li className={`information__tabs-item ${activeTab === Tab.SERVISES && 'information__tabs-item--active'}`}
            id={Tab.SERVISES}
            onClick={(evt) => {
              setActiveTab(evt.target.id ? evt.target.id : evt.target.name)
            }}
            >
              <Link className="information__tabs-text"
              tabIndex="3"
              to='#'
              onFocus={tabClick}
              name={Tab.SERVISES}
              >Онлайн-сервисы
              </Link>
          </li>
        </ul>
      </div>
      {renderTab(activeTab)}
      <div className="dot-information">
      {tabs.map((tab, index) => {
       return <div 
        key={index} 
        tabIndex="0"
        className={(tabs.indexOf(activeTab) === index) ? "dot-information__active" : "dot-information__item"}
        onKeyDown={(evt) => {
          if(evt.key === "Enter") {
            tabClick(evt, tab);
          }
        }}
        onClick={() => tabClick(null, tab)}
        ></div>
      })
      }
      </div>
    </section>
    </>
  );
}

export default Information;