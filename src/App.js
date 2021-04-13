// import logo from './logo.svg';
import './App.css';

import BounceOnScrollHeader from './headers/BounceOnScrollHeader/BounceOnScrollHeader';
import FloatingHeader from './headers/FloatingHeader/FloatingHeader';

function App() {

  // ************************************************************************
  // Instructions: uncomment one of the example components below to render
  // ************************************************************************

  // Example#1 - Header that provides a small bounce on scroll and sticks to top of viewport
  const jsx = <BounceOnScrollHeader />

  // Example#2 - Header that provides a small bounce on scroll and sticks to top of viewport
  //  const jsx = <FloatingHeader />
  
  // ************************************************************************
  // End Of React Sample Components
  // ************************************************************************

  /* Render component that has been uncommented */
  return ( 
    jsx
  )

}
 
export default App;
