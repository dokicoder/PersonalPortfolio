import React from 'react';
import styles from './timeline.module.scss';

interface IEntryProps {
  type: 'education' | 'work';
  trackTypeEducation: 'start' | 'end' | 'segment' | 'none';
  trackTypeWork: 'start' | 'end' | 'segment' | 'none';
  textContent: React.ReactNode;
}

const educationTrackMap = {
  start: styles.trackStart_education,
  end: styles.trackEnd_education,
  segment: styles.trackSegment_education,
  none: null,
};

const workTrackMap = {
  start: styles.trackStart_work,
  end: styles.trackEnd_work,
  segment: styles.trackSegment_work,
  none: null,
};

const TimelineEntry: React.FC<IEntryProps> = ({ type, trackTypeEducation, trackTypeWork, textContent }) => {
  return (
    <>
      {type === 'education' ? <div className={styles.text_education}>{textContent}</div> : <div />}
      <div className={educationTrackMap[trackTypeEducation]} />
      <div className={workTrackMap[trackTypeWork]} />
      {type === 'work' ? <div className={styles.text_work}>{textContent}</div> : <div />}
    </>
  );
};

const Timeline: React.FC = function () {
  return (
    <div className={styles.timeline}>
      <div className={styles.track_education} />
      <div className={styles.track_work} />
      <div className={styles.trackIcon_education}>
        <span>🎓</span>
      </div>
      <div className={styles.trackIcon_work}>
        <span>💼</span>
      </div>
      <TimelineEntry
        type="work"
        trackTypeEducation="none"
        trackTypeWork="end"
        textContent={
          <>
            <h2>ti&m AG</h2>
            <div>Software Developer</div>
          </>
        }
      />
      <TimelineEntry
        type="education"
        trackTypeEducation="end"
        trackTypeWork="segment"
        textContent={
          <>
            <h2>M.Sc. Computational Visualistics</h2>
            <div>OvGU University Magdeburg</div>
          </>
        }
      />
      <TimelineEntry
        type="work"
        trackTypeEducation="segment"
        trackTypeWork="start"
        textContent={
          <>
            <h2>HASOMED GmbH</h2>
            <div>Software Developer</div>
          </>
        }
      />
      <TimelineEntry
        type="education"
        trackTypeEducation="start"
        trackTypeWork="start"
        textContent={
          <>
            <h2>B.Sc. Computational Visualistics</h2>
            <div>OvGU University Magdeburg</div>
          </>
        }
      />
      {/*
        <div className={styles.trackStart_education} />
        <div className={styles.trackStart_work} />
        <div className={styles.text_education}>
            <h2>M.Sc. Computational Visualistics</h2>
            <div>OvGU University Magdeburg</div>
        </div>
        <div className={styles.trackSegment_education} />
        <div className={styles.trackEnd_work} />

        <div className={styles.text_work}>
            <h2>HASOMED GmbH</h2>
            <div>Software Developer</div>
        </div>
        <div className={styles.trackEnd_education} />

        <div className={styles.text_education}>
        
        </div>
      */}
    </div>
  );
};

export default Timeline;
