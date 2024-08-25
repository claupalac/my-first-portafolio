import React from 'react';
import Title from "../title/Title";
import PresentationText from "../title/PresentationText";
import './Home.css';
// import BadgesBar from "../BadgesBar/BadgesBar";

function Home() {
    return(
        <div className="home">
        <Title/>
        <PresentationText></PresentationText>
        {/*<BadgesBar></BadgesBar>*/}
        <PresentationText></PresentationText>
        <PresentationText></PresentationText>
        <PresentationText></PresentationText>
        <PresentationText></PresentationText>
        <PresentationText></PresentationText>
        <PresentationText></PresentationText>
    </div>)
    ;
}

export default Home;