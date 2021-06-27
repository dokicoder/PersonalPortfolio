import React from 'react';
import styles from './timeline.module.scss';

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
      <div className={styles.textColumn}>Timeline</div>
      <div className={styles.textColumn}>
        <h2>Computational Visualistics</h2>
        <div>
          <strong>BSc</strong> University of Magdeburg
        </div>
      </div>
    </div>
  );
};

export default Timeline;
