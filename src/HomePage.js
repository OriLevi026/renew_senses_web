import React, { Component } from 'react';
import ResearchPage from './ResearchPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import AwardsPage from './AwardsPage';
import VideosPage from './VideosPage';
import FoundersPage from './FoundersPage';

class HomePage extends Component {

    render() { 
        return (
            <div>
<<<<<<< HEAD
                <img src="/RNSS_background2.jpg" width='100%' height='auto'></img>
                <div>Conveying the visual world through sound</div>
=======
                <div class="home-container">
                    <span class="img-text">Conveying the Visual World through Sound</span>
                    <img class="home-img" src="/RNSS_background2.jpg" ></img>
                </div>
                <div>
                    <AboutPage/>
                    <ResearchPage/>
                    <AwardsPage/>
                    <VideosPage/>
                    <FoundersPage />
                    <ContactPage/>
                    <br/>
                </div>    
>>>>>>> update_design
            </div>
        );

    }
}
 
export default HomePage;