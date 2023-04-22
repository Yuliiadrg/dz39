import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Main from '../Main/Main'
import Aside from '../Aside/Aside'
import Footer from '../Footer/Footer'
import "./App.scss"

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Banner />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
