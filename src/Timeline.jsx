// src/Timeline.js

import React from 'react';
import './Timeline.css';
import timelineData from './TimelineData';

function TimelineEntry({ year, title, content, skills }) {
  return (
    <div className="timeline-entry">
      <div className="timeline-year">{year}</div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="timeline-skills">
          {skills.map(skill => <span key={skill}>{skill}</span>)}
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  // Sort the data by year in descending order
  const sortedData = timelineData.sort((a, b) => b.year - a.year);

  return (
    <div className="timeline">
      {sortedData.map(item => (
        <TimelineEntry key={item.year} {...item} />
      ))}
    </div>
  );
}

export default Timeline;
