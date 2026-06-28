// import { useState } from 'react'

import "./App.css";
import { Footer } from "./components/Footer";
import { HeaderForm } from "./components/HeaderForm";
import { List } from "./components/List";

function App() {
  return (
    <>
      <HeaderForm />
      <List />
      <Footer />
    </>
  );
}

export default App;
