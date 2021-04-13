import { motion } from 'framer-motion';
import React from 'react';

function Milestone({milestoneData}) {
    console.log(milestoneData);
    return (
        <div 
            className="progress-item"
        >   
            <p className="progress-title">{`${milestoneData.milestoneTitle} ${milestoneData.hasMilestoneUnlocked ? '✅' : '🔒' }`}</p>
            <div 
                className="progress-bar"
                style={{
                    boxShadow: `0 0 0 2px ${milestoneData.milestoneColor} inset`
                }}
            >
                <p>{milestoneData.hasMilestoneUnlocked ? milestoneData.completedText : ''}</p>
                <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${milestoneData.milestoneProgressPercentage}%`}}
                transition={{ delay: 1, stiffness: 500 , damping: 300 }}
                className="progress-width"
                style={{
                    backgroundColor: `${milestoneData.milestoneColor}`
                }}
                ></motion.div>
            </div>
            <div className="progress-info-container">
                <p className="progress-percentage">{milestoneData.milestoneProgressPercentage}% completed</p>
                <div className="progress-info">
                    <p>{milestoneData.milestoneCompletedQuestBadges}/{milestoneData.maxQuestBadges} QB</p>
                    <p style={{ marginLeft: 5 }}>{milestoneData.milestoneCompletedSkillBadges}/{milestoneData.maxSkillBadges} SB</p>
                </div>
            </div>
        </div>
    );
}

export default Milestone;