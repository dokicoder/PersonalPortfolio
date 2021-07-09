import React from 'react';
import styles from './timeline.module.scss';
import { Collapsible } from './../collapsible/collapsible';

interface IEntryProps {
  date: Date;
  fromEducationDate?: Date;
  fromWorkDate?: Date;
  type: 'education' | 'work';
  textContent: React.ReactNode;
  displayDotEducation?: boolean;
  displayDotWork?: boolean;
}

const startBSc = new Date('2008-10-01');
const finishBSc = new Date('2015-02-01');
const startHasomed = new Date('2015-02-01');
const startMSc = new Date('2016-10-01');
const finishMSc = new Date('2019-01-01');
const startTi8m = new Date('2019-06-01');

const earliestDate = new Date('2012-01-01');
// today
const latestDate = new Date();

const earliestMillis = earliestDate.getTime();
const latestMillis = latestDate.getTime();

const dateToTimePos = (date: Date) => {
  return (date.getTime() - earliestMillis) / (latestMillis - earliestMillis);
};

const TimelineEntry: React.FC<IEntryProps> = ({
  date,
  type,
  fromEducationDate = date,
  fromWorkDate = date,
  textContent,
  displayDotEducation = true,
  displayDotWork = true,
}) => {
  const time = dateToTimePos(date);
  const fromEducation = dateToTimePos(fromEducationDate);
  const fromWork = dateToTimePos(fromWorkDate);

  const offset = `calc(${time * 100}% - 3.7rem)`;
  const segmentHeight = delta => `${delta * 100}%`;

  return (
    <>
      {type === 'education' ? (
        <div style={{ bottom: offset }} className={styles.text_education}>
          {textContent}
        </div>
      ) : (
        <div />
      )}
      {displayDotEducation && (
        <div
          style={{
            bottom: offset,
            height: fromEducation != undefined ? segmentHeight(time - fromEducation) : undefined,
          }}
          className={styles.trackSegment_education}
        />
      )}
      {displayDotWork && (
        <div
          style={{ bottom: offset, height: fromWork != undefined ? segmentHeight(time - fromWork) : undefined }}
          className={styles.trackSegment_work}
        />
      )}
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
        date={latestDate}
        type="work"
        fromWorkDate={startTi8m}
        displayDotEducation={false}
        textContent={
          <>
            <h2>today</h2>
          </>
        }
      />
      <TimelineEntry
        date={startTi8m}
        type="work"
        fromWorkDate={startHasomed}
        displayDotEducation={false}
        textContent={
          <>
            <h2>ti&m AG</h2>
            <div>Software Developer</div>
            <Collapsible
              content={<div className={styles.infoContent}>Hello there, general Kenobi. Wanna shop at Obi?</div>}
            />
          </>
        }
      />
      <TimelineEntry
        date={finishMSc}
        type="education"
        fromEducationDate={startMSc}
        displayDotWork={false}
        textContent={
          <>
            <h2>M.Sc. Computational Visualistics</h2>
            <div>OvGU Magdeburg</div>
            <Collapsible content={<div className={styles.infoContent}>Hello </div>} align="right" />
          </>
        }
      />
      <TimelineEntry
        date={startHasomed}
        type="work"
        displayDotEducation={false}
        textContent={
          <>
            <h2>HASOMED GmbH</h2>
            <div>Software Developer</div>
            <Collapsible content={<div className={styles.infoContent}>Hello </div>} />
          </>
        }
      />
      <TimelineEntry
        date={finishBSc}
        type="education"
        fromEducationDate={earliestDate}
        textContent={
          <>
            <h2>B.Sc. Computational Visualistics</h2>
            <div>OvGU Magdeburg</div>
            <Collapsible content={<div className={styles.infoContent}>Hello </div>} align="right" />
          </>
        }
      />
    </div>
  );
};

export default Timeline;
