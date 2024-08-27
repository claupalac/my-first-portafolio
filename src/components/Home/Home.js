import React from 'react';
import Title from "../title/Title";
import PresentationText from "../title/PresentationText";
import './Home.css';
import BadgesBar from "../BadgesBar/BadgesBar";

function Home() {
    const badges = ['Badge 1', "Badge 2", "Badge 3"];
    return(
        <div className="home">
        <Title/>
        <BadgesBar badges={badges}></BadgesBar>
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