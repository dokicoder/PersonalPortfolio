import React, { useEffect } from 'react';

interface IProps {
  segments: { size: number; color: string; pos?: number }[];
}

const circlePos = (t: number): [number, number] => [Math.cos(2 * Math.PI * t), -Math.sin(2 * Math.PI * t)];
const toPos = ([x, y]: [number, number]) => [300 + x * 298, 300 + y * 298];

export const SkillsCircle: React.FC<IProps> = ({ segments }) => {
  let updatedPos = 0;
  segments?.forEach(s => {
    s.pos = updatedPos;
    updatedPos += s.size;
  });

  useEffect(() => {
    if (Math.abs(updatedPos - 1) > 0.0001) {
      console.error(`SkillsCircle: segments should sum up to 1, but their sum was ${updatedPos}`);
    }
  }, [segments]);

  return (
    <div>
      <svg width="100%" height="100%" viewBox="0 0 600 600">
        {segments.map(s => {
          const [x1, y1] = toPos(circlePos(0));
          const [x2, y2] = toPos(circlePos(s.size));

          return (
            <path
              key={`color-${s.color}`}
              d={`M ${x1 ?? 0} ${y1 ?? 0} A 298 298 0 0 0 ${x2 ?? 0} ${y2 ?? 0} L 300 300 L ${x1 ?? 0} ${y1 ?? 0}`}
              fill={s.color}
              transform={`rotate(${(s.pos ?? 0) * -360} 300 300)`}
            ></path>
          );
        })}
      </svg>
    </div>
  );
};
