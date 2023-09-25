import React from 'react';
import Header from "./conponent/common/Header";
import Footer from "./conponent/common/Footer";
import Main from "./conponent/page/section/Main";
import MainAdd from "./conponent/page/section/MainAdd";
import {BrowserRouter} from "react-router-dom";


function App() {

  return(
      <>
          <BrowserRouter>
              <Header/>
              <Main/>
              <MainAdd/>
              <Footer/>
          </BrowserRouter>
      </>
  )
}

export default App;