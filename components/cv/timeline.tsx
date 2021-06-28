import React from 'react';
import styles from './timeline.module.scss';

interface IEntryProps {
  time: number;
  fromEducation?: number;
  fromWork?: number;
  type: 'education' | 'work';
  textContent: React.ReactNode;
}

const TimelineEntry: React.FC<IEntryProps> = ({ time, type, fromEducation, fromWork, textContent }) => {
  const offset = `${time * 91}%`;
  const segmentHeight = delta => `${delta * 91}%`;

  return (
    <>
      {type === 'education' ? (
        <div style={{ bottom: offset }} className={styles.text_education}>
          {textContent}
        </div>
      ) : (
        <div />
      )}
      <div
        style={{ bottom: offset, height: fromEducation != undefined ? segmentHeight(time - fromEducation) : undefined }}
        className={styles.trackSegment_education}
      />
      <div
        style={{ bottom: offset, height: fromWork != undefined ? segmentHeight(time - fromWork) : undefined }}
        className={styles.trackSegment_work}
      />
      {type === 'work' ? (
        <div style={{ bottom: offset }} className={styles.text_work}>
          {textContent}
        </div>
      ) : (
        <div />
      )}
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
        time={1.0}
        type="work"
        fromWork={0.3}
        textContent={
          <>
            <h2>ti&m AG</h2>
            <div>Software Developer</div>
          </>
        }
      />
      <TimelineEntry
        time={0.5}
        type="education"
        fromEducation={0}
        textContent={
          <>
            <h2>M.Sc. Computational Visualistics</h2>
            <div>OvGU University Magdeburg</div>
          </>
        }
      />
      <TimelineEntry
        time={0.3}
        type="work"
        fromEducation={1}
        fromWork={1}
        textContent={
          <>
            <h2>HASOMED GmbH</h2>
            <div>Software Developer</div>
          </>
        }
      />
      <TimelineEntry
        time={0}
        type="education"
        fromEducation={1}
        fromWork={1}
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
