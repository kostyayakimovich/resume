import React, { useState } from 'react';
import './App.scss';
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  const [isRussian, setIsRussian] = useState(true);
  return (
    <div className="main">
      <Header
        isRussian={isRussian}
        setIsRussian={setIsRussian}
      />
      <Info isRussian={isRussian} />
    </div>
  );
}

export default App;
