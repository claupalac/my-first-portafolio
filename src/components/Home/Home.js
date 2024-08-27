import React from 'react';
import Title from "../title/Title";
import PresentationText from "../title/PresentationText";
import './Home.css';
import BadgesBar from "../BadgesBar/BadgesBar";
import DockerImage from '../../assets/images/Docker.png';
import AwsImage from '../../assets/images/aws.svg.png';
import JsImage from '../../assets/images/js.png';
import mysqlImage from '../../assets/images/mysql.svg';
import phpImage from '../../assets/images/php.svg';
import tpImage from '../../assets/images/tp.png';
import reactImage from '../../assets/images/react.png';

function Home() {
    const badges =
        [DockerImage, AwsImage, phpImage,
            JsImage, mysqlImage,tpImage, reactImage];
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