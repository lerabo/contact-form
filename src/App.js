import React from "react";
import ReactDOM from "react-dom";
import ContactForm from "./components/СontactForm/ContactForm";
import Footer from "./components/Layout/Footer";

const portalElement = document.getElementById('footer');

function App() {
  return (
    <div className="App">
      <ContactForm />
      {ReactDOM.createPortal(<Footer />, portalElement)}
    </div>
  );
}

export default App;
