import React, { useEffect } from 'react';
import Face from '../assets/images/drooling-face-emoji.png';
import Search from '../assets/icons/search.svg';
import Shop from '../assets/icons/shop.svg';
import ArrowCyrcle from '../assets/icons/arrow_circle.svg'
import { Basket } from './Basket';
import { WaitingOder } from './WaitingOder';


const Header = ({ showWaitingOrder, setShowWaitingOrder, chosenItem, activeShopping, setActiveShopping, setChosenItem }) => {

  const handleShopClick = () => {
    if (!activeShopping) {
      setActiveShopping(true);
    }
  };

  useEffect(() => {
    if (showWaitingOrder) {
      const timeoutId = setTimeout(() => {
        setShowWaitingOrder(false) ;
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showWaitingOrder, setShowWaitingOrder]);

    return(
        <div className="lucknow_content-header">
              <div className="lucknow_content-title">
                <p className="lucknow_content-text">Welcome To 
                  Lucknow
                </p>
                <div className="img_smile">
                  <img src={Face} />
                </div>
              </div>
              <div className="icons">
                <img src={Shop} onClick={handleShopClick}/>
                <img src={Search} />
                <img className='icons_arrow-cyrcle' src={ArrowCyrcle} />
                
              </div>
              {activeShopping && !showWaitingOrder 
              ? <Basket 
              chosenItem={chosenItem}  
              setChosenItem={setChosenItem}
              setShowWaitingOrder={setShowWaitingOrder}
              setActiveShopping={setActiveShopping}
              showWaitingOrder={showWaitingOrder}
              /> 
              :(showWaitingOrder && <WaitingOder />
              )}
        </div>
    )
}

export default Header;
