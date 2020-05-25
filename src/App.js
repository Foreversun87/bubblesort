import React from 'react';
import './App.css';
import MyDocument from "./MyDocument";
import Dashboard from "./Dashboard";
import BubblesortContextProvider from "./components/bubblesort/BubblesortContext";
import { PDFViewer } from '@react-pdf/renderer';

function App() {
  return (
    <div className="app">
      {/* <MyDocument />                 */}
     <BubblesortContextProvider>
        <Dashboard />
      </BubblesortContextProvider>
     </div>
  );
}

export default App;
