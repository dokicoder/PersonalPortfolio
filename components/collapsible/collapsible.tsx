import React, { useState } from 'react';
import styles from './collapsible.module.scss';

interface IProps {
  content: React.ReactNode;
  initial?: 'expanded' | 'collapsed';
  align?: 'left' | 'right';
}

export const Collapsible: React.FC<IProps> = ({ content, initial = 'expanded', align = 'left' }) => {
  const [expanded, setExpanded] = useState<boolean>(initial === 'expanded');

  return (
    <div
      className={`${styles.collapsible} ${expanded ? styles.expanded : ''} ${align === 'right' ? styles.right : ''}`}
    >
      <span role="button" onClick={() => setExpanded(!expanded)}>
        ▴
      </span>
      <div onClick={() => setExpanded(!expanded)} className={styles.collapsibleContent}>
        {content}
      </div>
    </div>
  );
};
