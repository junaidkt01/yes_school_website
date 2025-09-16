'use client'

import React from 'react'
import { useScrollReveal } from '../../../hooks/useScrollReveal';

const MissionVisionWrapper = ({ children }: { children: any }) => {
    const { elementRef, isVisible } = useScrollReveal("missionVisionSection");
    return (
        <div
            ref={elementRef}
               className={`mission_vision_section ${isVisible ? "visible" : ""}`}
        >
            {children}
        </div>
    )
}

export default MissionVisionWrapper;
