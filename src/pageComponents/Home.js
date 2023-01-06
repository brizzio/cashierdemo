import React, { useState, useEffect, useContext } from 'react';

import {AppLayout, MainSectionFlex} from '../components/Styled';
import Header from '../components/layouts/header'

import Footer from '../components/layouts/Footer'
import AppContent from '../components/layouts/AppContent';






export default function Home() {
  

  return (
    <>
     
        <MainSectionFlex>
        {/* <div className="grid-container"> */}
          <Header />
          <AppContent />
          <Footer />
        {/* </div> */}

        </MainSectionFlex>
      
    </>
  );
}