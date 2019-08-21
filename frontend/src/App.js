import React from "react";
import "./App.css";
import InvoiceList from "./components/InvoiceList";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img
          className="logo"
          src="https://www.2ulaundry.com/static/images/LaundryLogo.svg"
        />
      </div>
      <InvoiceList />
    </div>
  );
}

export default App;
