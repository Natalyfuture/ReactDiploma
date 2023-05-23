import { useState }  from 'react';
import Menu from './Menu';
import Header from './Header';
import Filter from './Filter';
import AllItems  from './AllItems';

const BaseHome = ({ setChosenItem, chosenItem}) => {
    const [showWaitingOrder, setShowWaitingOrder] = useState(false);
    const[activeShopping, setActiveShopping] = useState(false);
  
    return( 
        <section className="lucknow">
            <div className="container">
                <div className="menu">
                    <Menu />
                </div>
                <div className="lucknow_content">
                    <Header 
                    activeShopping={activeShopping}
                    setActiveShopping={setActiveShopping}
                    chosenItem={chosenItem}
                    setChosenItem={setChosenItem}
                    showWaitingOrder={showWaitingOrder}
                    setShowWaitingOrder={setShowWaitingOrder}
                    />
                    <Filter />
                    <AllItems 
                    activeShopping={activeShopping}
                    setActiveShopping={setActiveShopping}
                    showWaitingOrder={showWaitingOrder}
                    setChosenItem={setChosenItem}  
                    chosenItem={chosenItem} 
                    />
                </div>
            </div>
        </section> 
    )
}
export default BaseHome;
