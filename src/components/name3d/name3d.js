import React, { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './name3d.css'; // Import the CSS file

export default function Name3D() {
    const splineRef = useRef(null);

    useEffect(() => {
        splineRef.current.focus();
    }, []);

    return (
        <div className="name3d-container">
            <Spline
                ref={splineRef}
                tabIndex={0}
                scene="https://prod.spline.design/CFWb7Rct428MMOIA/scene.splinecode"
            />
        </div>
    );
}