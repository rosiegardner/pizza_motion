import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Base from './Base';
import Toppings from './Toppings';
import Order from './Order';
// import Modal from './Modal';
import { AnimatePresence } from 'framer-motion';



function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  // const [showModal, setShowModal] = useState(true);

  const addBase = (base) => {
    setPizza({
      ...pizza,
      base
    })
  }

  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)) {
      newToppings = [
        ...pizza.toppings, topping
      ];
    } else {
      newToppings = pizza.toppings
        .filter(item => item !== topping);
    }
    setPizza({
      ...pizza,
      toppings: newToppings
    });
  }

  return (
    <Router>
      <Header />
      {/* <Modal showModal={showModal} setShowModal={setShowModal}/> */}
      <AnimatePresence wait>
        <Routes>
          <Route path="/base"
            element={ <Base addBase={addBase} pizza={pizza} /> } />
          <Route path="/toppings"
            element={ <Toppings addTopping={addTopping} pizza={pizza} /> } />
          <Route path="/order"
            element={ <Order pizza={pizza} /> }/>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </AnimatePresence>
    </Router>
    
   
  );
}
// onExitComplete={() => setShowModal(false)} *AnimatePresence
// setShowModa={setShowModal} *Order path
export default App;
