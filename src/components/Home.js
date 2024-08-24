import React from 'react';
import Title from "./title/Title";
import ScrollPopup from "./scrollpopup/ScrollPopup";

function Home() {
        return <div>
                    <Title />
                    <ScrollPopup message="Scrolling down" />
        </div>
                ;
}

export default Home;