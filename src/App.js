import React from 'react';
import './App.css';
import Dashboard from "./Dashboard";
import BubblesortContextProvider from "./components/bubblesort/BubblesortContext";

function App() {
  return (
    <div className="app">
     <BubblesortContextProvider>
        <Dashboard />
      </BubblesortContextProvider>
     </div>
  );
}

export default App;
