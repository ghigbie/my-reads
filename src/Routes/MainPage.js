import React from 'react';
import * as StarterData from './../services/dataService';

import Header from './../Components/Header/Header';
import MainContent from './../Components/MainContent/MainContent';
import Footer from './../Components/Footer/Footer';

const MainPage = (props) => {
    return(
        <div>
              <Header title={StarterData.title}
                      subtitle={StarterData.subtitle}/>
              <MainContent sectionTitles={StarterData.sectionTitles}
                           books={props.books}/>
              <Footer footerText={StarterData.footerText}/>
        </div>
    );
};

export default MainPage;